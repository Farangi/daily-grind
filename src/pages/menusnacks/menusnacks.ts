import { AlertService, ItemService } from "../../_services";
import { Component, OnInit } from '@angular/core';
import { App,IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-menusnacks',
  templateUrl: 'menusnacks.html',
})
export class MenusnacksPage implements OnInit {

	items: any = [];
  	itemsUiHelper: any = [];
  	orderItems: any = [];
  	orderItemCount: number = 0;

    constructor(
  		public navCtrl: NavController, 
		public navParams: NavParams, 
		private app: App,
		private alertCtrl: AlertController,
		private itemService: ItemService,
		private alertService: AlertService) {
    }

	ngOnInit(){
		this.itemService.getAll().subscribe( data => {
			this.items = data;
			this.prepareItems();
		}, error => {
			this.alertService.error(error);
		});
	}

    private prepareItems(){
    	this.items.map(() => {
 
            this.itemsUiHelper.push({expanded: false, selected:false, quantity: 0, orderItemsHelper:[]});
 
        });
    }

    private addOrderItem (itemId, helperIdx) {
    	this.orderItems.push({itemId:itemId});
    	this.itemsUiHelper[helperIdx].orderItemsHelper.push({itemId:itemId, expanded:false, index:this.orderItemCount});
        this.orderItemCount++;
	}

	private removeOrderItem (itemId, helperIdx) {
		var removeIdx = -1;
		this.orderItems.map((orderItem, idx) => {
 
            if (orderItem.itemId == itemId){
            	removeIdx = idx;
            }

            return orderItem;
 
        });

        if(removeIdx > -1){
        	this.orderItems.splice(removeIdx, 1);
            this.itemsUiHelper[helperIdx].orderItemsHelper.splice(-1, 1);
        	this.orderItemCount--;
    	}
	}
 
    public expandItem(item){
 
        this.items.map((listItem, idx) => {
 
            if(item == listItem){
                this.itemsUiHelper[idx].expanded = !this.itemsUiHelper[idx].expanded;
                if(this.itemsUiHelper[idx].quantity == 0) {
                	this.itemsUiHelper[idx].selected = true;
                	this.itemsUiHelper[idx].quantity = 1;
                	this.addOrderItem(listItem._id, idx);
                }
            } else {
                this.itemsUiHelper[idx].expanded = false;
            }
 
            return listItem;
 
        });
 
    }

    public expandOrderItem(itemIdx, helperIdx){
 
        this.itemsUiHelper[itemIdx].orderItemsHelper.map((orderItem, idx) => {
 
            if(idx == helperIdx){
                this.itemsUiHelper[itemIdx].orderItemsHelper[helperIdx].expanded = !this.itemsUiHelper[itemIdx].orderItemsHelper[helperIdx].expanded;
            } else {
                this.itemsUiHelper[itemIdx].orderItemsHelper[idx].expanded = false;
            }
 
            return orderItem;
 
        });
 
    }

    increment (itemId, helperIdx) {

    	this.items.map((item, idx) => {
 
            if(item._id == itemId){
            	if(this.itemsUiHelper[idx].quantity>=5){
            		this.itemsUiHelper[idx].quantity = 5;
            	}
            	else {
                	this.itemsUiHelper[idx].quantity++;
                	this.addOrderItem(itemId, helperIdx);
            	}
            }

            return item;
 
        });
	}

	decrement (itemId, helperIdx) {

		this.items.map((item, idx) => {
 
            if(item._id == itemId){
            	if(this.itemsUiHelper[idx].quantity<=1){
            		this.itemsUiHelper[idx].quantity = 1;
            	}
            	else {
                	this.itemsUiHelper[idx].quantity--;
                	this.removeOrderItem(itemId, helperIdx);
            	}
            }

            return item;
 
        });
	}

	public getordersOfItem(itemId){
		var ordersOfItem = [];
 
        this.orderItems.map((orderItem) => {
 
            if(orderItem.itemId == itemId){
                ordersOfItem.push(orderItem);
            }
 
            return orderItem;
 
        });

        return ordersOfItem;
 
    }

    private removeItemOfOrder(itemId, itemIndex) {
    	this.itemsUiHelper[itemIndex].expanded = false;
    	this.itemsUiHelper[itemIndex].selected = false;
        this.itemsUiHelper[itemIndex].quantity = 0;

        var idx = this.orderItems.length-1;
        for(;idx>=0;idx--){
            if(this.orderItems[idx].itemId == itemId){
                this.orderItems.splice(idx, 1);
                this.itemsUiHelper[itemIndex].orderItemsHelper.splice(-1, 1);
                this.orderItemCount--;
            }
        }
    }

    public showRemoveConfirmDialogue(itemId, itemIndex) {
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
	          this.removeItemOfOrder(itemId, itemIndex);
	        }
	      }
	    ]
	  });
	  alert.present();
    }

    private getPreparedOrder(){
        var preparedOrder = {order:{items:this.orderItems}};
        return preparedOrder;
    }

    public placeOrder(){
    	if(this.orderItems.length == 0){
    		let alert = this.alertCtrl.create({
			    title: 'No Item',
			    subTitle: 'No item is added in the order. Please click on an item from the list to place the order.',
			    buttons: ['Dismiss']
			  });
			alert.present();
    	}
    	else{
    		console.log(this.getPreparedOrder());
            this.app.getRootNav().push("LocationPage", this.getPreparedOrder());
    	}
    }

}
