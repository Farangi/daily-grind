import { UserService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-smartcard',
  templateUrl: 'smartcard.html',
})
export class SmartcardPage {

	accountBalance:number=0;

  	constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
  		//this.accountBalance = 534;
		let userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.userService.getAccountBalance(userId).subscribe((response) => {
			this.accountBalance = response.balance;
		});
  	}
	
	ionViewWillEnter() {
		let userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.userService.getAccountBalance(userId).subscribe((response) => {
			this.accountBalance = response.balance;
		});
	}
}
