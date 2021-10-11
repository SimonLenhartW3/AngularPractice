import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, SimpleChange  } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  providers: [ DataService ]
})
export class BtnComponent implements OnInit, OnChanges {
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Input()
  leftVal!: string;
  @Input()
  topVal!: string;
  @Input()
  active!: boolean;
  @Input()
  btnNumber!: string;
  @Input()
  class!: string;
  @Input()
  posOnPage!: string;

  @Output() btnClick = new EventEmitter();

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
    if(this.active == null || false)
    {
      this.active = false; 
    }
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onClick() {
    this.btnClick.emit(this.btnNumber);
  }


}
