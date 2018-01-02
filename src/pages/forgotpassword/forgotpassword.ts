import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  user:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  submitForm() {
    console.log(this.user);
  }

  showLogin() {
    this.navCtrl.pop();
  }

}
