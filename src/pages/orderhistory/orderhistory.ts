import { OrderService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderhistory',
	templateUrl: 'orderhistory.html',
} )
export class OrderhistoryPage {

	orders: any = [];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public modalCtrl: ModalController,
		public orderService: OrderService ) {
		let userId = JSON.parse( localStorage.getItem( 'currentUser' ) )._id;
		this.orderService.getAll( userId ).subscribe( data => {
			this.orders = this.prepareItems(data);
		}, err => { 
			console.log(err);
		} )
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
