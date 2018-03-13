webpackJsonp([0],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, userService, authenticationService, alertService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.user = {};
        this.lastImage = null;
        this.isStudent = true;
        this.isAdmin = false;
        this.authForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(100)])],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            cellPhone: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(?=(\D*\d){11}\D*$)/)])],
            university: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            enrollmentNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^([0-1][0-1])-(\d{6})-(\d{2})$/)])],
            universityId: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^([0-1][0-1])-(\d{6})-(\d{2})$/)])],
            discipline: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            requestSmartCard: ['']
        });
    }
    ;
    SignupPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SignupPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    SignupPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    SignupPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            console.log(error);
            _this.presentToast('Error while storing file.');
        });
    };
    SignupPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    SignupPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    SignupPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = "http://yoururl/upload.php";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Image succesfully uploaded.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    SignupPage.prototype.submitForm = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.userService.create(value).subscribe(function (data) {
                _this.authenticationService.login(value.username, value.password)
                    .subscribe(function (data) {
                    _this.navCtrl.setRoot("SidemenuPage");
                }, function (error) {
                    _this.alertService.error(error);
                });
            }, function (error) {
                _this.alertService.error(error);
            });
        }
    };
    SignupPage.prototype.showLogin = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.showAdminControls = function () {
        this.isStudent = false;
        this.isAdmin = true;
    };
    SignupPage.prototype.showStudentControls = function () {
        this.isAdmin = false;
        this.isStudent = true;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\FreeLancing\DailyGrind\DailyGrind\src\pages\signup\signup.html"*/'\n\n<ion-content padding text-center>\n\n	<h5 margin-bottom ion-text color="primary">CREATE YOUR PROFILE</h5>\n\n\n\n	<form [formGroup]="authForm" (ngSubmit)="submitForm(authForm.value)">\n\n\n\n		<!-- <ion-buttons>\n\n	      <button ion-button icon-left (click)="presentActionSheet()" type="button">\n\n	        <ion-icon name="camera"></ion-icon>Select Image\n\n	      </button>\n\n	      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null" type="button">\n\n	        <ion-icon name="cloud-upload"></ion-icon>Upload\n\n	      </button>\n\n	    </ion-buttons> -->\n\n\n\n	    <ion-buttons class="mb-10">\n\n	    	<button ion-button [color]="isStudent ? \'primary\' : \'light\'" (click)="showStudentControls()" type="button">\n\n	        	Student\n\n	      	</button>\n\n	      	<button ion-button [color]="isAdmin ? \'primary\' : \'light\'" (click)="showAdminControls()" type="button">\n\n	        	Admin\n\n	      	</button>\n\n	    </ion-buttons>\n\n\n\n		<ion-row margin-bottom>\n\n	  		<ion-col col-6 text-right>\n\n				<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.firstName.valid && authForm.controls.firstName.touched}">\n\n			    	<ion-input type="text" placeholder="Firstname" formControlName="firstName"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.firstName.hasError(\'required\') && authForm.controls.firstName.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.firstName.hasError(\'pattern\') && authForm.controls.firstName.touched">Only Alphabets are allowed!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.firstName.hasError(\'minlength\') && authForm.controls.firstName.touched">Must have minmum 3 characters!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.firstName.hasError(\'maxlength\') && authForm.controls.firstName.touched">Maximum characters can be 50!</p>\n\n			</ion-col>\n\n\n\n			<ion-col col-6 text-right>\n\n				<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.lastName.valid && authForm.controls.lastName.touched}">\n\n			    	<ion-input type="text" placeholder="Lastname" formControlName="lastName"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.lastName.hasError(\'required\') && authForm.controls.lastName.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.lastName.hasError(\'pattern\') && authForm.controls.lastName.touched">Only Alphabets are allowed!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.lastName.hasError(\'minlength\') && authForm.controls.lastName.touched">Must have minmum 3 characters!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.lastName.hasError(\'maxlength\') && authForm.controls.lastName.touched">Maximum characters can be 50!</p>\n\n			</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom>\n\n			<ion-col col-12 text-right>\n\n				<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n\n			    	<ion-input type="text" placeholder="Email" formControlName="email"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">Email is not valid!</p>\n\n		  	</ion-col>\n\n	    </ion-row>\n\n\n\n		<ion-row margin-bottom>\n\n			<ion-col col-12 text-right>\n\n				<ion-item  class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n\n			    	<ion-input type="text" placeholder="Username" formControlName="username"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">Must have minmum 3 characters!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">Maximum characters can be 50!</p>\n\n		  	</ion-col>\n\n	    </ion-row>\n\n\n\n	    <ion-row margin-bottom>\n\n		    <ion-col col-12 text-right>\n\n			  	<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n\n			    	<ion-input type="password" placeholder="Password" formControlName="password"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.password.hasError(\'pattern\') && authForm.controls.password.touched">Must have at least 1 character and 1 number!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">Must have minmum 6 characters!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.password.hasError(\'maxlength\') && authForm.controls.password.touched">Maximum characters can be 100!</p>\n\n		  	</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom>\n\n		    <ion-col col-12>\n\n			  	<ion-item class="grind-item-input faded-input">\n\n			    	<ion-input type="password" placeholder="Confirm Password" formControlName="confirmPassword"></ion-input>\n\n			  	</ion-item>\n\n		  	</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom>\n\n		    <ion-col col-12 text-right>\n\n			  	<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.cellPhone.valid && authForm.controls.cellPhone.touched}">\n\n			    	<ion-input type="phone" placeholder="Cell Phone" formControlName="cellPhone" [attr.maxlength]="11"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.cellPhone.hasError(\'required\') && authForm.controls.cellPhone.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.cellPhone.hasError(\'pattern\') && authForm.controls.cellPhone.touched">Correct format is 03xxxxxxxxx!</p>\n\n		  	</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom>\n\n		    <ion-col col-12 text-right>\n\n			  	<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.university.valid && authForm.controls.university.touched}">\n\n				  <ion-label>Select University</ion-label>\n\n				  <ion-select formControlName="university" [selectOptions]="{ cssClass: \'confirm-alert\' }">\n\n				    <ion-option value="BAHRIA">Bahria University</ion-option>\n\n				  </ion-select>\n\n				</ion-item>\n\n\n\n				<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.university.hasError(\'required\') && authForm.controls.university.touched">This field is required!</p>\n\n			</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom *ngIf="isStudent">\n\n		    <ion-col col-12 text-right>\n\n			  	<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.enrollmentNumber.valid && authForm.controls.enrollmentNumber.touched}">\n\n			    	<ion-input type="text" placeholder="Enrollment Number" formControlName="enrollmentNumber" [attr.maxlength]="12"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.enrollmentNumber.hasError(\'required\') && authForm.controls.enrollmentNumber.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.enrollmentNumber.hasError(\'pattern\') && authForm.controls.enrollmentNumber.touched">Correct format is 01-xxxxxx-xx!</p>\n\n		  	</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom *ngIf="isStudent">\n\n		    <ion-col col-12 text-right>\n\n			  	<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.discipline.valid && authForm.controls.discipline.touched}">\n\n				  <ion-label class="text-white-dim">Discipline</ion-label>\n\n				  <ion-select formControlName="discipline" [selectOptions]="{ cssClass: \'confirm-alert\' }">\n\n				    <ion-option value="MANAGEMENT SCIENCES">Management Sciences</ion-option>\n\n				    <ion-option value="ELECTRICAL ENGINEERING">Electrical Engineering</ion-option>\n\n				    <ion-option value="SOFTWARE ENGINEERING">Software Engineering</ion-option>\n\n				    <ion-option value="COMPUTER ENGINEERING">Computer Engineering</ion-option>\n\n				    <ion-option value="COMPUTER SCIENCE">Computer Science</ion-option>\n\n				    <ion-option value="EARTH AND ENVIRONMENTAL SCIENCES">Earth and Environmental Sciences</ion-option>\n\n				    <ion-option value="HUMANITIES AND SOCIAL SCIENCES">Humanities and Social Sciences</ion-option>\n\n				    <ion-option value="LAW">Law</ion-option>\n\n				    <ion-option value="Medical STUDIES">Medical Studies</ion-option>\n\n				  </ion-select>\n\n				</ion-item>\n\n\n\n				<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.discipline.hasError(\'required\') && authForm.controls.discipline.touched">This field is required!</p>\n\n			</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom *ngIf="isAdmin">\n\n		    <ion-col col-12 text-right>\n\n			  	<ion-item class="grind-item-input faded-input" [ngClass]="{\'error-border\':!authForm.controls.universityId.valid && authForm.controls.universityId.touched}">\n\n			    	<ion-input type="text" placeholder="University Id" formControlName="universityId" [attr.maxlength]="12"></ion-input>\n\n			  	</ion-item>\n\n\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.universityId.hasError(\'required\') && authForm.controls.universityId.touched">This field is required!</p>\n\n			  	<p ion-text color="primary" class="error-text" *ngIf="authForm.controls.universityId.hasError(\'pattern\') && authForm.controls.universityId.touched">Correct format is 01-xxxxxx-xx!</p>\n\n		  	</ion-col>\n\n	  	</ion-row>\n\n\n\n	  	<ion-row margin-bottom>\n\n	  		<ion-col col-12>\n\n				<ion-item class="grind-clear-item">\n\n		    		<ion-label ion-text color="dark">Request for smart card</ion-label>\n\n		    		<ion-checkbox formControlName="requestSmartCard" class="grind-checkbox"></ion-checkbox>\n\n				</ion-item>\n\n			</ion-col>\n\n	  	</ion-row>\n\n\n\n		<ion-row margin-bottom>\n\n			<ion-col col-12>\n\n			  	<button ion-button block round color="primary" type="submit">\n\n			  		Register\n\n			  	</button>\n\n			</ion-col>\n\n		</ion-row>\n\n\n\n	</form>\n\n	<ion-row margin-bottom>\n\n		<ion-col col-12>\n\n		  	<a ion-text color="dark" (click)="showLogin()">Cancel</a>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\FreeLancing\DailyGrind\DailyGrind\src\pages\signup\signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_0__services__["f" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__services__["f" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__services__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__services__["a" /* AlertService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return File; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(101);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from '@ionic-native/file';
 *
 * constructor(private file: File) { }
 *
 * ...
 *
 * this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesnt exist'));
 *
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http: //www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http: //dev.w3.org/2009/dap/file-system/file-writer.html
 *  @interfaces
 *  IFile
 *  Entry
 *  DirectoryEntry
 *  DirectoryReader
 *  FileSystem
 */
var File = (function (_super) {
    __extends(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    /**
     * Get free disk space in Bytes
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space in Bytes
     */
    File.prototype.getFreeDiskSpace = function () {
        return new Promise(function (resolve, reject) {
            cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
        });
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    File.prototype.checkDir = function (path, dir) {
        if ((/^\//.test(dir))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var fullpath = path + dir;
        return this.resolveDirectoryUrl(fullpath)
            .then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.move(srcde, deste, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false, exclusive: false });
        })
            .then(function (de) {
            var reader = de.createReader();
            return _this.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return _this.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    File.prototype.checkFile = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveLocalFilesystemUrl(path + file)
            .then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return _this.remove(fe);
        });
    };
    /** Write a new file to the desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var getFileOpts = {
            create: !options.append,
            exclusive: !options.replace
        };
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, fileName, getFileOpts);
        })
            .then(function (fileEntry) {
            return _this.writeFileEntry(fileEntry, text, options);
        });
    };
    /** Write content to FileEntry.
     *
     * @hidden
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    /** Write to an existing file.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    File.prototype.writeExistingFile = function (path, fileName, text) {
        return this.writeFile(path, fileName, text, { replace: true });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    File.prototype.readAsText = function (path, file) {
        return this.readFile(path, file, 'Text');
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data: [<mediatype>][;base64],<data>
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    File.prototype.readAsDataURL = function (path, file) {
        return this.readFile(path, file, 'DataURL');
    };
    /**
     * Read file and return data as a binary data.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    File.prototype.readAsBinaryString = function (path, file) {
        return this.readFile(path, file, 'BinaryString');
    };
    /**
     * Read file and return data as an ArrayBuffer.
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    File.prototype.readAsArrayBuffer = function (path, file) {
        return this.readFile(path, file, 'ArrayBuffer');
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return _this.copy(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        return this.resolveLocalFilesystemUrl(directoryUrl)
            .then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    _this.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                _this.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    File.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    File.ctorParameters = function () { return []; };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "applicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "dataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "cacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalApplicationStorageDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalCacheDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "externalRootDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "tempDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "syncedDataDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "documentsDirectory", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* CordovaProperty */],
        __metadata("design:type", String)
    ], File.prototype, "sharedDirectory", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFreeDiskSpace", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "listDir", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeRecursively", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "checkFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Boolean]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "createFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "removeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "writeExistingFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsText", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsDataURL", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsBinaryString", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "readAsArrayBuffer", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "moveFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String, String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "copyFile", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveLocalFilesystemUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "resolveDirectoryUrl", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getDirectory", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Promise)
    ], File.prototype, "getFile", null);
    File = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'File',
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'macOS', 'Ubuntu', 'Windows', 'Windows Phone']
        })
    ], File);
    return File;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transfer; });
/* unused harmony export TransferObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(101);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @usage
 * ```typescript
 * import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
 * import { File } from '@ionic-native/file';
 *
 * constructor(private transfer: Transfer, private file: File) { }
 *
 * ...
 *
 * const fileTransfer: TransferObject = this.transfer.create();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * // full example
 * upload() {
 *   let options: FileUploadOptions = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *
 *   fileTransfer.upload('<file path>', '<api endpoint>', options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 **
 * download() {
 *   const url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * To store files in a different/publicly accessible directory, please refer to the following link
 * https://github.com/apache/cordova-plugin-file#where-to-store-files
 *
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 * @classes
 * TransferObject
 */
var Transfer = (function (_super) {
    __extends(Transfer, _super);
    function Transfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {TransferObject}
     */
    Transfer.prototype.create = function () {
        return new TransferObject();
    };
    return Transfer;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));
Transfer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
];
/** @nocollapse */
Transfer.ctorParameters = function () { return []; };
Transfer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        pluginName: 'FileTransfer',
        plugin: 'cordova-plugin-file-transfer',
        pluginRef: 'FileTransfer',
        repo: 'https://github.com/apache/cordova-plugin-file-transfer',
        platforms: ['Amazon Fire OS', 'Android', 'Browser', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone']
    })
], Transfer);

/**
 * @hidden
 */
var TransferObject = (function () {
    function TransferObject() {
        if (Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["h" /* checkAvailability */])('FileTransfer', null, 'FileTransfer') === true) {
            this._objectInstance = new FileTransfer();
        }
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    TransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        return;
    };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {string} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    TransferObject.prototype.download = function (source, target, trustAllHosts, options) {
        return;
    };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param listener {function} Listener that takes a progress event.
     */
    TransferObject.prototype.onProgress = function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    TransferObject.prototype.abort = function () { };
    return TransferObject;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Boolean]),
    __metadata("design:returntype", Promise)
], TransferObject.prototype, "upload", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
        successIndex: 2,
        errorIndex: 3
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], TransferObject.prototype, "download", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* InstanceCheck */])({ sync: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", void 0)
], TransferObject.prototype, "onProgress", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["c" /* CordovaInstance */])({
        sync: true
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransferObject.prototype, "abort", null);
TransferObject = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
        plugin: 'cordova-plugin-file-transfer',
        pluginName: 'FileTransfer'
    }),
    __metadata("design:paramtypes", [])
], TransferObject);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilePath; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(101);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * @name File Path
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 *
 * @usage
 * ```typescript
 * import { FilePath } from '@ionic-native/file-path';
 *
 * constructor(private filePath: FilePath) { }
 *
 * ...
 *
 * this.filePath.resolveNativePath(path)
 *   .then(filePath => console.log(filePath))
 *   .catch(err => console.log(err));
 *
 * ```
 */
var FilePath = (function (_super) {
    __extends(FilePath, _super);
    function FilePath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolve native path for given content URL/path.
     * @param {String} path  Content URL/path.
     * @returns {Promise<string>}
     */
    FilePath.prototype.resolveNativePath = function (path) { return; };
    FilePath.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    FilePath.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], FilePath.prototype, "resolveNativePath", null);
    FilePath = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'FilePath',
            plugin: 'cordova-plugin-filepath',
            pluginRef: 'window.FilePath',
            repo: 'https://github.com/hiddentao/cordova-plugin-filepath',
            platforms: ['Android']
        })
    ], FilePath);
    return FilePath;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DestinationType */
/* unused harmony export EncodingType */
/* unused harmony export MediaType */
/* unused harmony export PictureSourceType */
/* unused harmony export PopoverArrowDirection */
/* unused harmony export Direction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Camera; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(101);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera, CameraOptions } from '@ionic-native/camera';
 *
 * constructor(private camera: Camera) { }
 *
 * ...
 *
 *
 * const options: CameraOptions = {
 *   quality: 100,
 *   destinationType: this.camera.DestinationType.DATA_URL,
 *   encodingType: this.camera.EncodingType.JPEG,
 *   mediaType: this.camera.MediaType.PICTURE
 * }
 *
 * this.camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions} [options] Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.prototype.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.prototype.cleanup = function () { return; };
    ;
    Camera.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /** @nocollapse */
    Camera.ctorParameters = function () { return []; };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            callbackOrder: 'reverse'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "getPicture", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["a" /* Cordova */])({
            platforms: ['iOS']
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Camera.prototype, "cleanup", null);
    Camera = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["g" /* Plugin */])({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'BlackBerry 10', 'Browser', 'Firefox OS', 'iOS', 'Ubuntu', 'Windows', 'Windows Phone 8']
        })
    ], Camera);
    return Camera;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.js.map