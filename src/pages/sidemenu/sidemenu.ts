import { AuthenticationService } from "../../_services";
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-sidemenu',
  templateUrl: 'sidemenu.html',
})
export class SidemenuPage {

  rootPage = 'HomePage';
 
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Menu', pageName: 'HomePage', tabComponent: 'LoginPage', index: 0, icon: 'list-box' },
    { title: 'Profile', pageName: 'HomePage', tabComponent: 'LoginPage', index: 1, icon: 'person' },
    { title: 'Smart Card', pageName: 'HomePage', tabComponent: 'LoginPage', index: 2, icon: 'card' },
    { title: 'Order History', pageName: 'HomePage', tabComponent: 'LoginPage', index: 3, icon: 'return-left' }
  ];

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private authenticationService: AuthenticationService) {
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  gotoIntro() {
    this.navCtrl.setRoot("IntroPage");
  }

  logOut() {
    this.authenticationService.logout();
    this.navCtrl.setRoot("LoginPage");
  }

  exit() {
    console.log('exit');
  }

}
