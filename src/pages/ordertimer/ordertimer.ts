import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-ordertimer',
	templateUrl: 'ordertimer.html',
} )
export class OrdertimerPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController ) {

		this.presentOrderCompleteToast();
		console.log(this.navParams.data);

	}

	presentOrderCompleteToast() {
		let toast = this.toastCtrl.create( {
			message: 'Your order has been recieved',
			position: 'top',
			cssClass: 'grind-toast',
			showCloseButton: true,
			closeButtonText: 'Ok'
		} );

		toast.present();
	}

}
