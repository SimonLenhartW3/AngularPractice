import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-box',
  templateUrl: './in-box.component.html',
  styleUrls: ['./in-box.component.css']
})
export class InBoxComponent implements OnInit {
  @Input()
  widthVal!: string;
  @Input()
  heightVal!: string;
  @Input()
  topVal!: string;
  @Input()
  leftVal!: string;
  @Input()
  htmlContent!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
