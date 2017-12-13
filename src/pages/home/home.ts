import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as echarts from 'echarts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {

    const ec = echarts as any;
    const container = document.getElementById('container');
    console.log(container.offsetWidth, container.offsetHeight);

    const chart = ec.init(container);

    var option = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['Face Value in USD']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      series: [
        {
          name: 'Face Value in USD',
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: [320, 302, 301, 334, 390, 330, 320]
        }
      ]
    };

    chart.setOption(option);

    chart.on('click', function (params) {
      console.log(params);
    });

  }

}
