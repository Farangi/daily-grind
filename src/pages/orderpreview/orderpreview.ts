import { AlertService, ItemService, OrderService } from "../../_services";
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
	selectedLocation: any = "";
	locations: any = [];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private app: App,
		private itemService: ItemService,
		private alertService: AlertService,
	   	private orderService: OrderService ) {
		this.locations = [ { _id: 1, name: "Staff Room" }, { _id: 2, name: "Main Hallway" }, { _id: 3, name: "Ground" }];
	}

	ngOnInit() {
		this.order = this.navParams.data.order;
		this.prepareItems();
	}

	prepareItems() {
		this.order.items.map(( orderItem ) => {

			this.calculatePrice( orderItem )

		});
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

		if( this.order.location == undefined ) {
			this.selectedLocation = 'Counter';
		}
		else {

			this.locations.map(( loc ) => {

				if( loc._id == this.order.location ) {
					this.selectedLocation = loc.name;
				}

			} );
		}

		this.totalPrice = this.totalPrice + orderItem.price;

	}

	editItem( itemIdx ) {

	}

	deleteItem( itemIdx ) {

	}

	editLocation() {

	}

	placeOrder() {
		this.orderService.create(this.order).subscribe((data) => {
			//this.alertService.success('Order Succesfully placed');
			this.app.getRootNav().push("OrdertimerPage");
		}, error => {
			this.alertService.error(error);
		});
	}
}
