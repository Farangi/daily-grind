import { AuthenticationService, UserService, AlertService } from "../../_services";
import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit {

	user: any = {};
  loader: any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private app: App,
  	private authenticationService: AuthenticationService,
		private userService: UserService,
		private alertService: AlertService) {
  }
	  
	ngOnInit() {
    this.presentLoading();

		let userId = JSON.parse(localStorage.getItem('currentUser'))._id;
		this.userService.getById(userId).subscribe(user => {
			this.user = user;
      this.loader.dismiss();
		},error => {
      this.loader.dismiss();
			this.alertService.error(error);
		});
	}

  update() {
    this.presentLoading();

  	var updatedUser:any = {};
  	updatedUser._id = JSON.parse(localStorage.getItem('currentUser'))._id;
  	updatedUser.username = this.user.username;
  	updatedUser.password = this.user.password;
  	updatedUser.cellPhone = this.user.cellPhone;
		
		this.userService.update(updatedUser).subscribe(data => {
      this.loader.dismiss();
			this.alertService.success('Successfully Updated.')
		}, error => {
      this.loader.dismiss();
			this.alertService.error(error);
		});
		
  		console.log(updatedUser);
  }

  presentLoading() {
 
    this.loader = this.loadingCtrl.create({
      content: "Loading..."
    });
 
    this.loader.present();
 
  }

  logOut() {
    this.authenticationService.logout();
    this.app.getRootNav().setRoot("LoginPage");
  }

}
