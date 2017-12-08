import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {InvoiceDetailPage} from '../invoice-detail/invoice-detail';

class invoice {
  referenceNumber: string;
  maturityDate: string;
  faceValueInUSD: string;
}
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

  invoiceList: Array<invoice> = [];
  filteredInvoices: Array<invoice> = [];
  isfiltered: boolean;

  constructor(public navController: NavController, public navParams: NavParams, public http: HttpClient) {
    this.isfiltered = false;
    this.http.get('http://10.39.107.101:9080/rest/invoice').subscribe(data => {
        // Read the result field from the JSON response.
        this.invoiceList = <Array<invoice>>data;
      },
      err => console.log("error is " + err), // error
      () => console.log('read quotes Complete ' + this.invoiceList) // complete
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesListPage');
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
