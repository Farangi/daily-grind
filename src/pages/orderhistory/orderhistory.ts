import { OrderService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderhistory',
	templateUrl: 'orderhistory.html',
} )
export class OrderhistoryPage {

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public orderService: OrderService ) {
		let userId = JSON.parse( localStorage.getItem( 'currentUser' ) )._id;
		this.orderService.getAll( userId ).subscribe( data => {
			console.log(data);
		}, err => { 
			console.log(err);
		} )
	}

}
