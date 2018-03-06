import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderService, LocationService } from "../../_services";

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
		private locationService: LocationService) {
		this.locationService.getAll().subscribe(data => {
			this.locations = data;
		}, err => {
			console.log(err);
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
	        	 console.log(JSON.stringify(this.orderLocation.location));
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
			console.log(JSON.stringify(this.navParams.data));
			this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
		}
		else{
			this.placeOrderNoLocation();
		}
	}

	placeOrderNoLocation(){
		this.navParams.data.order.location = undefined;
		console.log(JSON.stringify(this.navParams.data));
		this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
	}

}
