import { OrderService, LocationService, AlertService } from "../../_services";
import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage implements OnInit {

	orderLocation:any = {};
	locations = [];
	enableLocations:boolean = false;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public loadingCtrl: LoadingController,
		private app: App,
		private orderService: OrderService,
		private locationService: LocationService,
		private alertService: AlertService) {
		this.locationService.getAll().subscribe(data => {
			this.locations = data;
		}, err => {
			this.alertService.error(err);
		});
		
	}
	
	ionViewWillEnter () {
		this.presentLoading();

		let order = this.navParams.data.order;
		if(order) {
			order.userId = JSON.parse( localStorage.getItem( 'currentUser' ) )._id;
			this.orderService.checkBalanceAvailability( order ).subscribe(( data ) => {
				this.enableLocations = data;
				this.loader.dismiss();
			}, error=>{
	         	this.loader.dismiss();
	         	this.alertService.error(error);
	       });
		}
	}

	presentLoading() {
 
	    this.loader = this.loadingCtrl.create({
	      content: "Loading..."
	    });
	 
	    this.loader.present();
	 
	}

	isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key)){
	            return false;
	        }
	    }
	    return true;
	}

	private getPreparedLocation(){
    	var preparedOrderLocation = JSON.parse(JSON.stringify(this.orderLocation));;
    	delete preparedOrderLocation.location.subLocations;
        return preparedOrderLocation;
    }

	placeOrder() {
		if(this.orderLocation.location){
			this.navParams.data.order.location = this.getPreparedLocation();
			this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
		}
		else{
			this.placeOrderNoLocation();
		}
	}

	placeOrderNoLocation(){
		this.navParams.data.order.location = undefined;
		this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
	}

}
