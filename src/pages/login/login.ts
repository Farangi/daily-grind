import { AuthenticationService, AlertService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user:any = {};
  rootPage: any = "SidemenuPage";
  loader: any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      public loadingCtrl: LoadingController,
      public storage: Storage,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitForm() {
    this.presentLoading();

    this.authenticationService.login(this.user.username, this.user.password)
        .subscribe(
        data=>{
            this.storage.get('introShown').then((result) => { 

              if(result){
                this.rootPage = "SidemenuPage";
              } else {
                this.rootPage = "IntroPage";
                console.log(this.rootPage);
                this.storage.set('introShown', true);
              }

            this.loader.dismiss();
            this.navCtrl.setRoot(this.rootPage);   
        });

       }, error=>{
         this.loader.dismiss();
         this.alertService.error(error);
       });
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Signing In..."
    });
 
    this.loader.present();
 
  }

  showSignup() {
    this.navCtrl.push("SignupPage");
  }

  showForgotPassword() {
    this.navCtrl.push("ForgotpasswordPage");
  }

}
