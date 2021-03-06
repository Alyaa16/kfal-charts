import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent, ApexStroke, ApexAnnotations, ApexTitleSubtitle, ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke,
  colors: any[],
  annotations: ApexAnnotations,
  title: ApexTitleSubtitle,
  xaxis: ApexXAxis,
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  percentage: any = 50
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart1") chart1: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(private router:Router) {

    this.chartOptions = {
      stroke: {
        lineCap: "round",
       // width:10
      },
      series: [this.percentage],
      chart: {
        width:400,
        type: "radialBar",
        offsetY: -20,
        foreColor: '#e7e7e7',
        stackType: "normal",
        sparkline:
        {
          enabled: false
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: '28px',
              color: "#e7e7e7",
              offsetY: -1,
              fontWeight:'bold'
            },
            value: {
              formatter: function(val) {
                return 'months left';
              },
              color: "#e7e7e7",
              fontSize: "18px",
              show: true,
              offsetY: 15,
              
              
            }
          }
        }
      },
      fill: {
        colors: ["#0F3050"]
      },
      labels: [this.percentage],

    };
  }

  goAbout(){
    this.router.navigateByUrl('/about')
  }
}
