import { AlertService, OrderService } from "../../_services";
import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderpreview',
	templateUrl: 'orderpreview.html',
} )
export class OrderpreviewPage implements OnInit {

	items: any = [];
	order: any = {};
	totalPrice: number = 0;
	selectedLocation: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private app: App,
		private alertService: AlertService,
	   	private orderService: OrderService ) {
		this.selectedLocation = {};
	}

	ngOnInit() {
		this.order = this.navParams.data.order;
		this.prepareItems();
	}

	prepareItems() {
		this.order.items.map(( orderItem ) => {

			this.calculatePrice( orderItem );
			return orderItem;

		});
		this.items = this.order.items;
		if(this.order.location == undefined) {
			this.selectedLocation = 'Counter';
		}
		else {
			this.selectedLocation.name = this.order.location.location.name;
			this.selectedLocation.sublocation = this.order.location.subLocation.name;
		}
	}

	calculatePrice( orderItem ) {
		if( orderItem.serving ) {
			orderItem.servings.map(( serv ) => {

				if( orderItem.serving == serv.id ) {
					orderItem.price = orderItem.price + serv.price;
				}

			});
		}

		if( orderItem.variant ) {
			orderItem.variants.map(( varian ) => {

				if( orderItem.variant == varian.id ) {
					orderItem.price = orderItem.price + varian.price;
				}

			});
		}

		if( orderItem.addon ) {
			orderItem.addons.map(( ad ) => {

				if( orderItem.addon == ad.id ) {
					orderItem.price = orderItem.price + ad.price;
				}

			});
		}

		this.totalPrice = this.totalPrice + orderItem.price;

	}

	editItem( itemIdx ) {

	}

	deleteItem( itemIdx ) {

	}

	editLocation() {

	}

	private getPreparedOrder(){
    	var preparedOrder = JSON.parse(JSON.stringify(this.order));;
    	preparedOrder.items.map((preparedOrderItem) => {
    		delete preparedOrderItem.name;
    		delete preparedOrderItem.price;
    		delete preparedOrderItem.description;
    		delete preparedOrderItem.servings;
            delete preparedOrderItem.variants;
            delete preparedOrderItem.addons;
 
        });
        return preparedOrder;
    }

	placeOrder() {
		console.log(JSON.stringify(this.getPreparedOrder()));
		this.orderService.create(this.getPreparedOrder()).subscribe((data) => {
			this.app.getRootNav().push("OrdertimerPage");
		}, error => {
			this.alertService.error(error);
		});
	}
}
