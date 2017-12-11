import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the InvoiceApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InvoiceApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InvoiceApiProvider Provider');
  }

  getInvoices() {
    return new Promise(resolve => {
      this.http.get('http://10.39.107.101:9080/rest/invoice').subscribe(data => {
        resolve(data);
      })
    })
  }

}
