import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

	@ViewChild(Slides) slides: Slides;

  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  	}

  	gotoSlide(slideNumber) {
		this.slides.slideNext();
	}

  	goToMenu(){
    	this.navCtrl.setRoot("SidemenuPage");
  	}

}
