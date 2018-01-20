import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderService } from "../../_services";

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
		private orderService: OrderService) {
		this.locations = [{_id:1,name:"Staff Room",subLocations:[{_id:1,name:"Location1"},{_id:2,name:"Location2"}]},
						  {_id:2,name:"Main Hallway",subLocations:[{_id:1,name:"Location2"},{_id:2,name:"Location3"}]}, 
						  {_id:3,name:"Ground", subLocations:[{_id:1,name:"Location4"},{_id:2,name:"Location5"}]}];
	}
	
	ngOnInit () {
		let order = this.navParams.data.order;
		order.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.orderService.checkBalanceAvailability(order).subscribe((data) => {
			this.enableLocations = data;
		});
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
		console.log(JSON.stringify(this.navParams.data));
		this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
	}

}
