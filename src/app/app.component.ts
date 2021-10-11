import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activePageApp: boolean[] = [false, true, false, false, false];
  pageTitles: string[] = ["Global", "Auction", "Staking", "Price", "Your Statistics"];
  activePageTitle: string = "Global";

  changePanel(btnNum: any)
  {
    this.activePageApp.forEach(function(value, index, arr)
    {
      arr[index] = false;
    })
    this.activePageApp[btnNum] = true;
    this.activePageTitle = this.pageTitles[btnNum];  
  }


}
