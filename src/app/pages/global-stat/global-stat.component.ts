import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-global-stat',
  templateUrl: './global-stat.component.html',
  styleUrls: ['./global-stat.component.css'],
  providers: [DataService]
})
export class GlobalStatComponent implements OnInit {
  
  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

}