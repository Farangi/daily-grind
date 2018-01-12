import { AuthenticationService } from "../../_services";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

	user: any = {};

  	constructor(
  				public navCtrl: NavController, 
  				public navParams: NavParams,
  				private app: App,
  				private authenticationService: AuthenticationService) {
  		this.user = {
  						firstName:'Hassan', lastName: 'Jalil', email:'abx@gmail.com', 
  					 	username:'Hassan', password: '12345678', cellPhone:'03124374837',
  					 	university:'Bahria University Islamabad', enrollmentNumber: '01-674535-54', 
  					 	discipline:'Management Sciences'
  					};
  	}

  	update() {
  		var updatedUser = {};
  		updatedUser._id = JSON.parse(localStorage.getItem('currentUser'))._id;
  		updatedUser.username = this.user.username;
  		updatedUser.password = this.user.password;
  		updatedUser.cellPhone = this.user.cellPhone;

  		console.log(updatedUser);
  	}

  	logOut() {
    	this.authenticationService.logout();
    	this.app.getRootNav().setRoot("LoginPage");
  	}

}
