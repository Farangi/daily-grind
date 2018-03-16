import { AlertService } from "../_services";
import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

@Component( {
    templateUrl: 'app.html'
} )
export class MyApp implements OnInit
{
    rootPage: any = 'LoginPage';

    constructor (
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private alertCtrl: AlertController,
        private alertService: AlertService ) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    ngOnInit ()
    {
        this.alertService.getMessage().subscribe( message => {
			if(message){
	            if(message.type == 'error'){
	                let alert = this.alertCtrl.create({
	                    title: 'Error',
	                    subTitle: message.text,
	                    buttons: [ 'Dismiss' ]
	                });
	                alert.present();
	            } else if(message.type == 'success'){
					let alert = this.alertCtrl.create({
	                    title: 'Success',
	                    subTitle: message.text,
	                    buttons: [ 'OK' ]
	                });
	                alert.present();
				}
			}
        }); 
    }
}

