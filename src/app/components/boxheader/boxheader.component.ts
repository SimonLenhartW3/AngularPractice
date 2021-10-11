import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxheader',
  templateUrl: './boxheader.component.html',
  styleUrls: ['./boxheader.component.css']
})
export class BoxheaderComponent implements OnInit {
  @Input()
  topVal!: string;
  @Input()
  leftVal!: string;
  @Input()
  content1!: string;
  @Input()
  content2!: string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
