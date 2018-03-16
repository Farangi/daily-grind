import { AlertService, ItemService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController, ViewController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderhistoryitems',
	templateUrl: 'orderhistoryitems.html',
} )
export class OrderhistoryitemsPage {

	items: any = [];
	loader: any;

	constructor(
		public platform: Platform,
		public navCtrl: NavController,
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		public viewCtrl: ViewController,
		private itemService: ItemService,
		private alertService: AlertService ) {
	}

	ionViewWillEnter() {
		this.presentLoading();
		this.prepareItems( this.navParams.data.items );
	}

	presentLoading() {
 
        this.loader = this.loadingCtrl.create({
          content: "Loading..."
        });
     
        this.loader.present();
     
    }

	private prepareItems( items ) {
		let itemLength:number = items.length;
		let itemCounter:number = 0;
		
		items.map(( item ) => {
			this.itemService.getById( item.itemId ? item.itemId : item._id ).subscribe(( data ) => {
				item.details = data;
				this.items.push( item );
				itemCounter++;
				
				if(itemCounter == itemLength){
					this.loader.dismiss();
				}
			}, error => { 
				this.loader.dismiss();
				this.alertService.error(error);
			});
			return item;
		});
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

}
