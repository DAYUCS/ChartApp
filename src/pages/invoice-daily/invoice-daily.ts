import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoiceModel } from '../../models/invoice-model';
import { InvoiceDetailPage } from '../invoice-detail/invoice-detail';

/**
 * Generated class for the InvoiceDailyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-daily',
  templateUrl: 'invoice-daily.html',
})
export class InvoiceDailyPage {

  invoiceList: Array<InvoiceModel> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.invoiceList = navParams.get('filteredInvoice');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDailyPage');
  }

  itemTapped(event, invoice) {
    console.log(invoice);
    this.navCtrl.push(InvoiceDetailPage, {
      invoice: invoice
    });
  }

}
