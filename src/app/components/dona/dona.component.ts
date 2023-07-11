import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input()
  public title: string = 'Sin título'

  @Input()
  public labels: string[] = [ 'No data', 'No data', 'No data' ];

  @Input()
  public data: number[] = [1,2,3]

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: this.data },
    ]
  };

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.labels,
      datasets: [
        { data: this.data },
      ]
    };
  }
}
