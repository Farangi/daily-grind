import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-orderprevieweditorder',
  templateUrl: 'orderprevieweditorder.html',
})
export class OrderprevieweditorderPage {

	item: any = {};
	helperItem: any = {};

  	constructor(
	  	public platform: Platform,
	  	public navCtrl: NavController, 
	  	public viewCtrl: ViewController,
	  	public navParams: NavParams) {
  	}

  	ionViewWillEnter() {
  		this.item = this.navParams.data.item;
  		this.helperItem.serving = this.item.serving;
  		this.helperItem.variant = this.item.variant;
  		this.helperItem.addon = this.item.addon;
	}

  	dismiss() {
    	this.viewCtrl.dismiss({status:-1});
  	}

  	done() {
  		this.item.serving = this.helperItem.serving;
  		this.item.variant = this.helperItem.variant;
  		this.item.addon = this.helperItem.addon;
  		this.viewCtrl.dismiss({status:0});
  	}

}
