import { AuthenticationService, UserService, AlertService } from "../../_services";
import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

	user: any = {};

  	constructor(
  				public navCtrl: NavController, 
  				public navParams: NavParams,
  				private app: App,
  				private authenticationService: AuthenticationService,
				private userService: UserService,
				private alertService: AlertService) {
//  		this.user = {
//  						firstName:'Hassan', lastName: 'Jalil', email:'abx@gmail.com', 
//  					 	username:'Hassan', password: '12345678', cellPhone:'03124374837',
//  					 	university:'Bahria University Islamabad', enrollmentNumber: '01-674535-54', 
//  					 	discipline:'Management Sciences'
//  					};
  	}
	  
	ngOnInit() {
		let userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.userService.getById(userId).subscribe(user => {
			this.user = user;
		},error => {
			this.alertService.error(error);
		});
	}

  	update() {
  		var updatedUser:any = {};
  		updatedUser._id = JSON.parse(localStorage.getItem('currentUser'))._id;
  		updatedUser.username = this.user.username;
  		updatedUser.password = this.user.password;
  		updatedUser.cellPhone = this.user.cellPhone;
		
		this.userService.update(updatedUser).subscribe(data => {
			this.alertService.success('Successfully Updated.')
		}, error => {
			this.alertService.error(error);
		});
		
  		console.log(updatedUser);
  	}

  	logOut() {
    	this.authenticationService.logout();
    	this.app.getRootNav().setRoot("LoginPage");
  	}

}
