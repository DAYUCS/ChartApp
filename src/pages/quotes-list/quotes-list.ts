import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { QuotesDetailPage } from '../quotes-detail/quotes-detail';

/**
 * Generated class for the QuotesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes-list',
  templateUrl: 'quotes-list.html',
})
export class QuotesListPage {

  quotesList = [];
  filteredQuotes = [];
  isfiltered: boolean ;

  constructor(public navController: NavController, public navParams: NavParams, public http:HttpClient) {
    this.isfiltered = false;
    this.http.get('http://10.39.107.101:9080/rest/invoice').subscribe(data => {
      // Read the result field from the JSON response.
      this.quotesList = data;
    },
    err => console.log("error is "+err), // error
    () => console.log('read quotes Complete '+ this.quotesList) // complete
  );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesListPage');
  }

  searchQuotes(event) {
		if(event.target.value.length > 2) {
      var filteredJson = this.quotesList.filter(function (row) {
        if(row.referenceNumber.indexOf(event.target.value) != -1) {
          return true
        } else {
          return false;
        }
    });
    this.isfiltered = true;
    this.filteredQuotes = filteredJson;
		}
	}

  itemTapped(event, quote) {
		console.log(quote);
		this.navController.push(QuotesDetailPage, {
			quote: quote
		});
	}

}
