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

	orderLocation:any = "";
	locations = [];
	enableLocations:boolean = false;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private app: App,
		private orderService: OrderService) {
		this.locations = [{_id:1,name:"Staff Room"}, {_id:2,name:"Main Hallway"}, {_id:3,name:"Ground"}];
	}
	
	ngOnInit () {
		let order = this.navParams.data.order;
		order.userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.orderService.checkBalanceAvailability(order).subscribe((data) => {
			this.enableLocations = data;
		});
	}

	placeOrder() {
		if(this.orderLocation != ""){console.log(JSON.stringify(this.navParams.data));
			this.navParams.data.order.location = this.orderLocation;
			//console.log(JSON.stringify(this.navParams.data));
			this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
		}
		else{
			this.placeOrderNoLocation();
		}
	}

	placeOrderNoLocation(){
		// if(this.navParams.data.order.location != undefined){
		// 	delete this.navParams.data.order.location;
		// }
		console.log(JSON.stringify(this.navParams.data));
		this.app.getRootNav().push("OrderpreviewPage", this.navParams.data);
	}

}
