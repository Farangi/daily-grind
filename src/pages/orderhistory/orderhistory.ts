import { AlertService, OrderService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderhistory',
	templateUrl: 'orderhistory.html',
} )
export class OrderhistoryPage {

	orders: any = [];
	loader: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		public modalCtrl: ModalController,
		public orderService: OrderService,
		private alertService: AlertService ) {
	}

	ionViewWillEnter() {
		this.presentLoading();

		let userId = JSON.parse( localStorage.getItem( 'currentUser' ) )._id;
		this.orderService.getAll( userId ).subscribe( data => {
			this.orders = this.prepareItems(data);
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

	private prepareItems(orders){
    	orders.map((order) => {
    		if(order.location === undefined){
    			order.location = {name:'counter'};
    		}
	        return order;
	    });
	    return orders;
    }

    showDetails(items){
    	let viewItemsModal = this.modalCtrl.create('OrderhistoryitemsPage', {items:items});
		viewItemsModal.present();
    }

}
