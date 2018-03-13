import { AlertService, OrderService } from "../../_services";
import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

@IonicPage()
@Component( {
	selector: 'page-orderpreview',
	templateUrl: 'orderpreview.html',
} )
export class OrderpreviewPage {

	items: any = [];
	order: any = {};
	totalPrice: number = 0;
	selectedLocation: any;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private app: App,
		private alertCtrl: AlertController,
		public modalCtrl: ModalController,
		private alertService: AlertService,
	   	private orderService: OrderService ) {
		this.selectedLocation = {};
	}

	ionViewWillEnter() {
		this.order = this.navParams.data.order;
		this.prepareItems();
	}

	prepareItems() {
		this.calculatePrice();
		this.items = this.order.items;

		if(this.order.location == undefined) {console.log('azz');
			this.selectedLocation.name = 'Counter';
		}
		else {
			this.selectedLocation.name = this.order.location.location.name;
			this.selectedLocation.sublocation = this.order.location.subLocation.name;
		}
	}

	calculatePrice() {
		var mockPrice = 0;
		this.order.items.map(( orderItem ) => {
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

			mockPrice = mockPrice + orderItem.price;

		});

		this.totalPrice = mockPrice;

	}

	editItem( itemIdx ) {
		let orderEditModal = this.modalCtrl.create('OrderprevieweditorderPage', {item:this.order.items[itemIdx]});

    	orderEditModal.onDidDismiss(data => {
		    if(data.status > -1) {
		    	this.calculatePrice();
			}
		});

		orderEditModal.present();
	}

	removeItem( itemIdx ) {
		this.totalPrice = this.totalPrice - this.order.items[itemIdx].price;
		this.order.items.splice(itemIdx, 1);
	}

	editLocation() {
		this.app.getRootNav().pop();
	}

	public showRemoveConfirmDialogue(itemIdx) {
		if(this.order.items.length > 1) {
	    	let alert = this.alertCtrl.create({
	  	    title: 'Confirm removal',
	  	    message: 'Are you sure you want to remove this item?',
	  	    buttons: [
	  	      {
	  	        text: 'Cancel',
	  	        role: 'cancel',
	  	        handler: () => {
	  	        }
	  	      },
	  	      {
	  	        text: 'Yes',
	  	        handler: () => {
	  	          this.removeItem(itemIdx);
	  	        }
	  	      }
	  	    ]
		    });
		    alert.present();
		}
		else{
			let alert = this.alertCtrl.create({
		      title: 'Last Item',
		      subTitle: "Can't remove the last item of order!",
		      buttons: ['OK']
		    });
		    alert.present();
		}
    }

	private getPreparedOrder(){
    	var preparedOrder = JSON.parse(JSON.stringify(this.order));
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
		this.orderService.create(this.getPreparedOrder()).subscribe((data) => {
			console.log(data);
			this.app.getRootNav().push("OrdertimerPage", this.navParams.data);
		}, error => {
			this.alertService.error(error);
		});
	}
}
