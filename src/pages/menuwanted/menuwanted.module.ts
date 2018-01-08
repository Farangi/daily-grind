import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuwantedPage } from './menuwanted';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    MenuwantedPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuwantedPage),
    MenuPageModule
  ],
})
export class MenuwantedPageModule {}
