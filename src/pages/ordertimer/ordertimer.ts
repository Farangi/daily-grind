import { ItemService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-ordertimer',
	templateUrl: 'ordertimer.html',
} )
export class OrdertimerPage {

	currentOrder: any;
	currentTime: Date = new Date();
	hours = 0;
	minutes = 0;
	seconds = 0;
	isTimeCompleted: boolean = true;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public toastCtrl: ToastController,
		private itemService: ItemService ) {

		this.currentTime.setHours( 0, 0, 0, 0 );
		this.currentOrder = this.navParams.data;
		if( this.currentOrder ) {
			this.calculateTime();
			this.presentOrderCompleteToast( 'Your order has been recieved' );
		}
		else {
			this.presentOrderCompleteToast( 'There was an Error placing your order.' );
		}
	}

	presentOrderCompleteToast( message: string ) {
		let toast = this.toastCtrl.create( {
			message: message,
			position: 'top',
			cssClass: 'grind-toast',
			showCloseButton: true,
			closeButtonText: 'Ok'
		} );

		toast.present();
	}
	
	doneClicked() {
		this.navCtrl.setRoot("SidemenuPage");
	}

	calculateTime() {
		if( this.currentOrder.items ) {
			this.currentOrder.items.map(( item ) => {
				this.itemService.getById( item.itemId ? item.itemId : item._id ).subscribe(( data ) => {

					let time: number = Number( data.time );
					this.currentTime.setMinutes( this.currentTime.getMinutes() + time );
					this.hours = this.currentTime.getHours();
					this.minutes = this.currentTime.getMinutes();
					this.seconds = this.currentTime.getSeconds();
				} );

				return item;
			} );


			let timeInterval = setInterval(() => {
				this.currentTime.setSeconds( this.currentTime.getSeconds() - 1 );
				this.hours = this.currentTime.getHours();
				this.minutes = this.currentTime.getMinutes();
				this.seconds = this.currentTime.getSeconds();
				if( this.hours === 0 && this.minutes === 0 && this.seconds === 0 ) {
					clearInterval( timeInterval );
					this.isTimeCompleted = false;
					this.presentOrderCompleteToast( 'Your order is ready now, you will recieve it shortly.' );
				}

			}, 1000 );
		}
	}
}
