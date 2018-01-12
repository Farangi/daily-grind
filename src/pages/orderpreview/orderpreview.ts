import { AlertService, ItemService, OrderService } from "../../_services";
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderpreview',
	templateUrl: 'orderpreview.html',
} )
export class OrderpreviewPage implements OnInit {

	items: any = [];
	allItems = [];
	order: any = {};
	totalPrice: number = 0;
	selectedLocation: any = "";
	locations: any = [];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private itemService: ItemService,
		private alertService: AlertService,
	   	private orderService: OrderService ) {
		//console.log( "Order =>  " + JSON.stringify( this.order ) );
		this.locations = [ { _id: 1, name: "Staff Room" }, { _id: 2, name: "Main Hallway" }, { _id: 3, name: "Ground" }];
	}

	ngOnInit() {
		this.order = this.navParams.data.order;
		this.itemService.getAll().subscribe( data => {
			this.allItems = data;
			//console.log(JSON.stringify(this.allItems));
			this.prepareItems();
		}, error => {
			this.alertService.error( error );
		} );
	}

	prepareItems() {
		this.order.items.map(( orderItem, idx ) => {

			this.allItems.map(( item ) => {

				if( orderItem.itemId == item._id ) {
					this.addToItems( item, orderItem )
					//console.log(JSON.stringify(this.items));
				}

			} );

			return orderItem;

		} );
	}

	addToItems( item, orderItem ) {
		let uiItem: any = {};
		uiItem.name = item.name;
		uiItem.description = item.description;
		uiItem.price = item.price;
		if( orderItem.serving ) {
			item.servings.map(( serv ) => {

				if( orderItem.serving == serv.id ) {
					uiItem.serving = serv;
					uiItem.price = uiItem.price + serv.price;
				}

				return serv;

			} );
		}

		if( orderItem.variant ) {
			item.variants.map(( varian ) => {

				if( orderItem.variant == varian.id ) {
					uiItem.variant = varian;
					uiItem.price = uiItem.price + varian.price;
				}

				return varian;

			} );
		}

		if( orderItem.addon ) {
			item.addons.map(( ad ) => {

				if( orderItem.addon == ad.id ) {
					uiItem.addon = ad;
					uiItem.price = uiItem.price + ad.price;
				}

				return ad;

			} );
		}

		if( this.order.location == undefined ) {
			this.selectedLocation = 'counter';
		}
		else {

			this.locations.map(( loc ) => {

				if( loc._id == this.order.location ) {
					this.selectedLocation = loc.name;
				}

			} );
		}

		this.items.push( uiItem );
		this.totalPrice = this.totalPrice + uiItem.price;

	}

	editItem( itemIdx ) {

	}

	deleteItem( itemIdx ) {

	}

	editLocation() {

	}

	placeOrder() {
		this.orderService.create(this.order).subscribe((data) => {
			this.alertService.success('Order Succesfully placed');
		}, error => {
			this.alertService.error(error);
		});
	}
}
