import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InvoiceDailyPage } from './invoice-daily';

@NgModule({
  declarations: [
    InvoiceDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(InvoiceDailyPage),
  ],
})
export class InvoiceDailyPageModule {}
