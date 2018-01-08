import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderpreviewPage } from './orderpreview';

@NgModule({
  declarations: [
    OrderpreviewPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderpreviewPage),
  ],
})
export class OrderpreviewPageModule {}
