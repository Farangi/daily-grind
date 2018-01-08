import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenusnacksPage } from './menusnacks';
import { MenuPageModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    MenusnacksPage,
  ],
  imports: [
    IonicPageModule.forChild(MenusnacksPage),
    MenuPageModule
  ],
})
export class MenusnacksPageModule {}
