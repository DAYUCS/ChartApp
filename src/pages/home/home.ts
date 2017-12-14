import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as echarts from 'echarts';
import { InvoiceModel } from '../../models/invoice-model';
import { InvoiceApiProvider } from '../../providers/invoice-api/invoice-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public InvoiceApiProvider: InvoiceApiProvider) {
  }

  ionViewDidLoad() {
    var invoiceList: Array<InvoiceModel> = [];
    var dates: Array<String> = [];
    var values: Array<number> = [];
    var numbers: Array<number> = [];

    const ec = echarts as any;
    const container = document.getElementById('container');
    console.log(container.offsetWidth, container.offsetHeight);
    const chart = ec.init(container);

    var option = {
      color: ['#3398DB', '#db54da'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'        // Option：'line' | 'shadow'
        }
      },
      legend: {
        data: ['Face Value in USD', 'Number of Invoices']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'value',
        name: 'Face Value in USD'
      },
      {
        type: 'category',
        name: 'Number of Invoices',
        show: false
      }],
      yAxis: {
        type: 'category',
        data: dates
      },
      series: [
        {
          name: 'Face Value in USD',
          type: 'bar',
          stack: 'total',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: values
        },
        {
          name: 'Number of Invoices',
          type: 'bar',
          stack: 'total',
          scale: true,
          label: {
            normal: {
              show: true,
              position: 'outsideRight'
            }
          },
          data: numbers
        }
      ]
    };

    chart.on('click', function (params) {
      console.log(params);
    });

    this.InvoiceApiProvider.getInvoices().then((data: Array<InvoiceModel>) => {
      invoiceList = data;
      console.log("Invoices number: " + invoiceList.length);

      //face values and numbers be grouped by date
      var result = [];
      invoiceList.reduce(function (res, value) {
        if (!res[value.maturityDate]) {
          res[value.maturityDate] = {
            qty: 0,
            x: value.maturityDate,
            y: 0
          };
          result.push(res[value.maturityDate]);
        }
        res[value.maturityDate].qty += 1;
        res[value.maturityDate].y += value.faceValueInUSD;
        return res;
      }, {});

      //construct data points
      result.forEach(function (item) {
        dates.push(item.x);
        values.push(item.y);
        numbers.push(item.qty);
      });

      console.log("There are " + dates.length + " dates to be shown.");
      console.log("There are " + values.length + " values to be shown.");

      chart.setOption(option);
    });
  }

}
