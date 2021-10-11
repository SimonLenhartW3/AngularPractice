import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input()
  imgSrc!: string;
  @Input()
  topVal!: string; 
  @Input()
  leftVal!: string; 
  

  constructor() { }

  ngOnInit(): void {
  }

}
