import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-box',
  templateUrl: './basic-box.component.html',
  styleUrls: ['./basic-box.component.css']
})
export class BasicBoxComponent implements OnInit {
  @Input()
  widthVal!: string;
  @Input()
  heightVal!: string;
  @Input()
  topVal!: string;
  @Input()
  leftVal!: string;
  @Input() 
  boxtitle1!: string;
  @Input() 
  boxtitle2!: string;
  @Input()
  titleTop!: string;
  @Input()
  titleLeft!: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
