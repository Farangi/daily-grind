import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  item = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitForm() {
    console.log(this.item);
    this.navCtrl.setRoot("SidemenuPage");
  }

  showSignup() {
    this.navCtrl.push("SignupPage");
  }

  showForgotPassword() {
    this.navCtrl.push("ForgotpasswordPage");
  }

}
