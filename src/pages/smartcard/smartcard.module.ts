import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartcardPage } from './smartcard';

@NgModule({
  declarations: [
    SmartcardPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartcardPage),
  ],
})
export class SmartcardPageModule {}
