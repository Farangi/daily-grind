import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	menuRoot = "MenuPage";
  	profileRoot = "ProfilePage";
  	smartCardRoot = "SmartcardPage";
  	orderHistoryRoot = "OrderhistoryPage";

  	myIndex: number;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.myIndex = navParams.data.tabIndex || 0;
	}

}
