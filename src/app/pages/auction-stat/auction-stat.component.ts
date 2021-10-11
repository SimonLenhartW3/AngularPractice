import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-auction-stat',
  templateUrl: './auction-stat.component.html',
  styleUrls: ['./auction-stat.component.css'],
  providers: [ DataService ]
})
export class AuctionStatComponent implements OnInit {


  constructor(private dservice: DataService) {
    //service verwenden
   }

  ngOnInit(): void {
  }
}
