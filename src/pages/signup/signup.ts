import { UserService, AuthenticationService, AlertService } from "../../_services";
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare let cordova: any;

@IonicPage()
@Component( {
    selector: 'page-signup',
    templateUrl: 'signup.html',
    providers: [ File, Transfer, Camera, FilePath, UserService ]
} )
export class SignupPage
{

    user: any = {};
    lastImage: string = null;
    showDiscipline: boolean = true;
    loading: Loading;
    authForm: FormGroup;

    constructor (
        public navCtrl: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private camera: Camera,
        private transfer: Transfer,
        private file: File,
        private filePath: FilePath,
        public actionSheetCtrl: ActionSheetController,
        public toastCtrl: ToastController,
        public platform: Platform,
        public loadingCtrl: LoadingController,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService   ) {

            this.authForm = formBuilder.group({
                firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(50)])],
                lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*'), Validators.minLength(3), Validators.maxLength(50)])],
                email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
                username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
                password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/), Validators.minLength(6), Validators.maxLength(100)])],
                confirmPassword: ['', Validators.compose([Validators.required])],
                cellPhone: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=(\D*\d){11}\D*$)/)])],
                university: ['', Validators.compose([Validators.required])],
                enrollmentNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^([0-1][0-1])-(\d{6})-(\d{2})$/)])],
                discipline: ['', Validators.compose([Validators.required])],
                requestSmartCard: ['']
            });
    };
    public presentActionSheet ()
    {
        let actionSheet = this.actionSheetCtrl.create( {
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: () =>
                    {
                        this.takePicture( this.camera.PictureSourceType.PHOTOLIBRARY );
                    }
                },
                {
                    text: 'Use Camera',
                    handler: () =>
                    {
                        this.takePicture( this.camera.PictureSourceType.CAMERA );
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        } );
        actionSheet.present();
    }

    public takePicture ( sourceType )
    {
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        // Get the data of an image
        this.camera.getPicture( options ).then(( imagePath ) =>
        {
            // Special handling for Android library
            if ( this.platform.is( 'android' ) && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY )
            {
                this.filePath.resolveNativePath( imagePath )
                    .then( filePath =>
                    {
                        let correctPath = filePath.substr( 0, filePath.lastIndexOf( '/' ) + 1 );
                        let currentName = imagePath.substring( imagePath.lastIndexOf( '/' ) + 1, imagePath.lastIndexOf( '?' ) );
                        this.copyFileToLocalDir( correctPath, currentName, this.createFileName() );
                    } );
            } else
            {
                var currentName = imagePath.substr( imagePath.lastIndexOf( '/' ) + 1 );
                var correctPath = imagePath.substr( 0, imagePath.lastIndexOf( '/' ) + 1 );
                this.copyFileToLocalDir( correctPath, currentName, this.createFileName() );
            }
        }, ( err ) =>
        {
            this.presentToast( 'Error while selecting image.' );
        } );
    }

    // Create a new name for the image
    private createFileName (): string
    {
        var d = new Date(),
            n = d.getTime(),
            newFileName = n + ".jpg";
        return newFileName;
    }

    // Copy the image to a local folder
    private copyFileToLocalDir ( namePath, currentName, newFileName )
    {
        this.file.copyFile( namePath, currentName, cordova.file.dataDirectory, newFileName ).then( success =>
        {
            this.lastImage = newFileName;
        }, error =>
        {
            console.log( error );
            this.presentToast( 'Error while storing file.' );
        } );
    }

    private presentToast ( text )
    {
        let toast = this.toastCtrl.create( {
            message: text,
            duration: 3000,
            position: 'top'
        } );
        toast.present();
    }

    // Always get the accurate path to your apps folder
    public pathForImage ( img )
    {
        if ( img === null )
        {
            return '';
        } else
        {
            return cordova.file.dataDirectory + img;
        }
    }

    public uploadImage ()
    {
        // Destination URL
        var url = "http://yoururl/upload.php";

        // File for Upload
        var targetPath = this.pathForImage( this.lastImage );

        // File name only
        var filename = this.lastImage;

        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename }
        };

        const fileTransfer: TransferObject = this.transfer.create();

        this.loading = this.loadingCtrl.create( {
            content: 'Uploading...',
        } );
        this.loading.present();

        // Use the FileTransfer to upload the image
        fileTransfer.upload( targetPath, url, options ).then( data =>
        {
            this.loading.dismissAll()
            this.presentToast( 'Image succesfully uploaded.' );
        }, err =>
        {
            this.loading.dismissAll()
            this.presentToast( 'Error while uploading file.' );
        } );
    }

    submitForm (value: any)
    {   console.log(this.authForm.valid);
        if(this.authForm.valid) {console.log(value);
            this.userService.create(value).subscribe(
                data=>{
                this.authenticationService.login(value.username, value.password)
                    .subscribe(
                    data=>{
                        this.navCtrl.setRoot( "SidemenuPage" );
                    },
                    error=>{
                        this.alertService.error(error);
                    });
            },
            error=>{
                this.alertService.error(error);
            });
        }
    }

    showLogin ()
    {
        this.navCtrl.pop();
    }

    hideDisciplineDrop() {
        this.showDiscipline = false;
    }

    showDisciplineDrop() {
        this.showDiscipline = true;
    }

}
