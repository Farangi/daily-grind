import { ItemService } from "../../_services";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-orderhistoryitems',
  templateUrl: 'orderhistoryitems.html',
})
export class OrderhistoryitemsPage {

  items: any = [];

  constructor(
  		public platform: Platform,
	  	public navCtrl: NavController, 
	  	public viewCtrl: ViewController,
      private itemService: ItemService,
	  	public navParams: NavParams) {
      this.prepareItems(this.navParams.data.items);
  }

  private prepareItems(items) {
    items.map( ( item ) => {
      this.itemService.getById( item.itemId ? item.itemId : item._id ).subscribe( ( data ) => {
        item.details = data;

        if(item.serving){
          var servIdx = item.details.servings.findIndex( variant => serving.id === item.serving );
          item.serving = item.details.servings[servIdx];
        }

        if(item.variant){
          var varIdx = item.details.variants.findIndex( variant => variant.id === item.variant );
          item.variant = item.details.variants[varIdx];
        }

        if(item.addon){
          var addIdx = item.details.addons.findIndex( variant => addon.id === item.addon );
          item.addon = item.details.addons[addIdx];
        }

        this.items.push(item);
      });
      return item;
    });
    console.log(this.items);
  }

  dismiss() {
    this.viewCtrl.dismiss({status:-1});
  }

}
