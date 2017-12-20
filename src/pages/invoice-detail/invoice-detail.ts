import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvoiceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-detail',
  templateUrl: 'invoice-detail.html',
})
export class InvoiceDetailPage {

  invoiceDetail: {referenceNumber:'', maturityDate:'', faceValueInUSD:''};

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.invoiceDetail = navParams.get('invoice');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailPage');
  }

}
