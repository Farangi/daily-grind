import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-smartcard',
  templateUrl: 'smartcard.html',
})
export class SmartcardPage {

	accountBalance:number=0;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.accountBalance = 534;
  	}

}
