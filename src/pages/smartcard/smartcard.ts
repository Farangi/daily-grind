import { AlertService, UserService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-smartcard',
  templateUrl: 'smartcard.html',
})
export class SmartcardPage {

	accountBalance:number=0;
	loader: any;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		public loadingCtrl: LoadingController, 
  		private userService: UserService,
  		private alertService: AlertService) {
  	}
	
	ionViewWillEnter() {
		this.presentLoading();

		let userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.userService.getAccountBalance(userId).subscribe((response) => {
			this.accountBalance = response.balance;
			this.loader.dismiss();
		}, error => {
            this.loader.dismiss();
			this.alertService.error(error);
		});
	}

	presentLoading() {
 
        this.loader = this.loadingCtrl.create({
          content: "Loading..."
        });
     
        this.loader.present();
     
    }
}
