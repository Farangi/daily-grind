import { AuthenticationService, AlertService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user:any = {};

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private authenticationService: AuthenticationService,
      private alertService: AlertService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitForm() {
     this.authenticationService.login(this.user.username, this.user.password)
       .subscribe(
       data=>{
        this.navCtrl.setRoot("SidemenuPage");
       },error=>{
         this.alertService.error(error);
       });
  }

  showSignup() {
    this.navCtrl.push("SignupPage");
  }

  showForgotPassword() {
    this.navCtrl.push("ForgotpasswordPage");
  }

}
