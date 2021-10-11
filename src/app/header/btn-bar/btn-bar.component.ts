import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.css'],
  providers: [DataService]
})
export class BtnBarComponent implements OnInit {
  @Output() btnClickedEvent = new EventEmitter();

  btnActive: boolean[] = [true, false, false, false, false];

  constructor(private dservice: DataService) { }

  ngOnInit(): void {
  }

  changePanel(btnNum: any)
  {
    if(this.btnActive[btnNum]==false)
    {
      this.btnActive.forEach(function(value, index, arr)
      {
        arr[index] = false;
      })
      this.btnActive[btnNum] = !this.btnActive[btnNum];
      this.btnClickedEvent.emit(btnNum);
    }
  }
}
