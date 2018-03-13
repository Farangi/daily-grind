import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderService, LocationService, AlertService } from "../../_services";

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
	
	ngOnInit () {
		let order = this.navParams.data.order;
		if(order) {
			order.userId = JSON.parse( localStorage.getItem( 'currentUser' ) )._id;
			this.orderService.checkBalanceAvailability( order ).subscribe(( data ) => {
				this.enableLocations = data;
			} );
		}
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
