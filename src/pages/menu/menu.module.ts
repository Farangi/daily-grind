import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPage } from './menu';
import { MenuItemCollapseComponent } from '../../components/menu-item-collapse/menu-item-collapse';

@NgModule({
  declarations: [
    MenuPage,
    MenuItemCollapseComponent
  ],
  imports: [
    IonicPageModule.forChild(MenuPage),
  ],
  exports: [
  	MenuItemCollapseComponent
  ]
})
export class MenuPageModule {}
