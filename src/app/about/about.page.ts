import { Component, OnInit, ViewChild } from "@angular/core";
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
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  
  public chartOptions: Partial<ChartOptions>;
  percentage: any = 76
  constructor(private router:Router) { 
    
    this.chartOptions = {
      
      stroke: {
        lineCap: "round",
        width:5
      },
      series: [this.percentage],
      chart: {
        type: "radialBar",
        offsetY: -10,
        foreColor: '#e7e7e7',
        stackType: "normal",
        sparkline:
        {
          enabled: false
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "90%",
            margin: 5, // margin is in pixels
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: '24px',
              color: "#e7e7e7",
              offsetY: -20
            },
            value: {
              formatter: function(val) {
                return 'months left';
              },
              color: "#e7e7e7",
              fontSize: "20px",
              show: true,
              offsetY: -10,
              
            }
          }
        }
      },
      fill: {
        colors: ["#2b9111"]
      },
      labels: [this.percentage],
    };

    
  }
  ngOnInit() {
  }

  
  goContact(){
   this.router.navigateByUrl('/contact')
  }
 
}
