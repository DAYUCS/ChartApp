import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoiceApiProvider } from '../../providers/invoice-api/invoice-api';
import { InvoiceModel } from '../../models/invoice-model';
import { InvoiceDetailPage } from '../invoice-detail/invoice-detail';

/**
 * Generated class for the QuotesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invoice-list',
  templateUrl: 'invoice-list.html',
})
export class InvoiceListPage {

  invoiceList: Array<InvoiceModel> = [];
  filteredInvoices: Array<InvoiceModel> = [];
  isfiltered: boolean;

  constructor(private navController: NavController, private navParams: NavParams, private invApiProvider: InvoiceApiProvider) {
    this.isfiltered = false;
    this.invApiProvider.getInvoices().then((data: Array<InvoiceModel>) => {
      this.invoiceList = data;
      console.log("Invoices number: " + this.invoiceList.length);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceListPage');
  }

  searchInvoices(event) {
    if (event.target.value.length > 2) {
      var filteredJson = this.invoiceList.filter(function (row) {
        if (row.referenceNumber.indexOf(event.target.value) != -1) {
          return true
        } else {
          return false;
        }
      });
      this.isfiltered = true;
      this.filteredInvoices = filteredJson;
    }
  }

  itemTapped(event, invoice) {
    console.log(invoice);
    this.navController.push(InvoiceDetailPage, {
      invoice: invoice
    });
  }

}
