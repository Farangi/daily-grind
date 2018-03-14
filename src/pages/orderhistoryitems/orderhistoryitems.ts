import { ItemService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderhistoryitems',
	templateUrl: 'orderhistoryitems.html',
} )
export class OrderhistoryitemsPage {

	items: any = [];

	constructor(
		public platform: Platform,
		public navCtrl: NavController,
		public viewCtrl: ViewController,
		private itemService: ItemService,
		public navParams: NavParams ) {
		this.prepareItems( this.navParams.data.items );
	}

	private prepareItems( items ) {
		items.map(( item ) => {
			this.itemService.getById( item.itemId ? item.itemId : item._id ).subscribe(( data ) => {
				item.details = data;
				this.items.push( item );
			} );
			return item;
		} );
	}

	dismiss() {
		this.viewCtrl.dismiss( { status: -1 } );
	}

}
