import { AlertService, ItemService } from "../../_services";
import { Component, OnInit } from '@angular/core';
import { App, IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  	menu: string = "wanted";
	items: any = [];
  	orderItems: any = [];
  	orderItemCount: number = 0;
  	uniqueOrderItemCount: number = 0;
 
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
    	this.items.map((item) => {
 
            item.expanded = false;
    		item.selected = false;
    		item.quantity = 0;
    		item.itemOrderNum = 0
    		item.orderItemsHelper = [];
            item.category = 'wanted'
            return item;
 
        });
        this.items[0].category = 'all';
        this.items[1].category = 'all';
        this.items[2].category = 'all';
        this.items[3].category = 'snacks';
        this.items[4].category = 'snacks';
        this.items[5].category = 'snacks';
    }
 
    expandItem(item){
 
        this.items.map((listItem) => {
 
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
                if(listItem.quantity == 0) {
                    listItem.selected = true;
                	listItem.quantity = 1;

                	this.uniqueOrderItemCount++;
                	listItem.itemOrderNum = this.uniqueOrderItemCount;
                	this.addOrderItem(listItem);
                }
            } else {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }

    expandOrderItem(item, orderIdx){
    	console.log(JSON.stringify(this.orderItems));
 
        item.orderItemsHelper.map((orderItem, idx) => {
 
            if(idx == orderIdx){
                item.orderItemsHelper[idx].expanded = !item.orderItemsHelper[idx].expanded;
            } else {
                item.orderItemsHelper[idx].expanded = false;
            }
 
            return orderItem;
 
        });
 
    }

    private addOrderItem (item) {
    	var orderItem = {_id:item._id, name:item.name, price:item.price, description:item.description, orderItemsHelper:item.orderItemsHelper};
    	if(item.servings){
    		orderItem.servings = item.servings;
    	}
    	if(item.variants){
    		orderItem.variants = item.variants;
    	}
    	if(item.addons){
    		orderItem.addons = item.addons;
    	}

    	item.orderItemsHelper.push({_id:item._id, expanded:false, index:this.orderItemCount});
    	this.orderItems.push(orderItem);
        this.orderItemCount++;
	}

	private removeOrderItem (item) {
		var removeIdx = -1;
		this.orderItems.map((orderItem, idx) => {
 
            if (orderItem._id == item._id){
            	removeIdx = idx;
            }

            return orderItem;
 
        });

        if(removeIdx > -1){
        	this.orderItems.splice(removeIdx, 1);
            item.orderItemsHelper.splice(-1, 1);
        	this.orderItemCount--;
    	}
	}

    increment (item) {
    	if(item.quantity>=5) {
    		item.quantity = 5;
    	}
    	else {
        	item.quantity++;
        	this.addOrderItem(item);
    	}
	}

	decrement (item) {
    	if(item.quantity<=1){
    		item.quantity = 1;
    	}
    	else {
        	item.quantity--;
        	this.removeOrderItem(item);
    	}
	}

	public getordersOfItem(id){
		var ordersOfItem = [];
 
        this.orderItems.map((orderItem) => {
 
            if(orderItem._id == id){
                ordersOfItem.push(orderItem);
            }
 
            return orderItem;
 
        });

        return ordersOfItem;
 
    }

    private removeItemOfOrder(item) {
    	item.expanded = false;
        item.selected = false;
        item.quantity = 0;

        var idx = this.orderItems.length-1;
        for(;idx>=0;idx--){
            if(this.orderItems[idx]._id == item._id){
                this.orderItems.splice(idx, 1);
                item.orderItemsHelper.splice(-1, 1);
                this.orderItemCount--;
            }
        }
    }

    public showRemoveConfirmDialogue(item) {
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
	          this.removeItemOfOrder(item);
	        }
	      }
	    ]
	  });
	  alert.present();
    }

    private getPreparedOrder(){
    	var preparedOrder = JSON.parse(JSON.stringify(this.orderItems));
    	preparedOrder.map((preparedOrderItem) => {
 
            delete preparedOrderItem.orderItemsHelper;
            delete preparedOrderItem.itemOrderNum;
 
        });
        return {order:{items:preparedOrder}};
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
