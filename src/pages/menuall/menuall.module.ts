import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuallPage } from './menuall';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    MenuallPage
  ],
  imports: [
    IonicPageModule.forChild(MenuallPage),
    MenuPageModule
  ],
})
export class MenuallPageModule {}
