import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuallPage } from './menuall';
import { MenuItemCollapseComponent } from '../../components/menu-item-collapse/menu-item-collapse';

@NgModule({
  declarations: [
    MenuallPage,
    MenuItemCollapseComponent
  ],
  imports: [
    IonicPageModule.forChild(MenuallPage),
  ],
})
export class MenuallPageModule {}
