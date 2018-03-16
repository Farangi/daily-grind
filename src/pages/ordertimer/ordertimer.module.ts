import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdertimerPage } from './ordertimer';

@NgModule({
  declarations: [
    OrdertimerPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdertimerPage),
  ],
})
export class OrdertimerPageModule {}
