import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn/btn.component';
import { ChartComponent } from './components/chart/chart.component';
import { AuctionStatComponent } from './pages/auction-stat/auction-stat.component';
import { GlobalStatComponent } from './pages/global-stat/global-stat.component';
import { StakingStatComponent } from './pages/staking-stat/staking-stat.component';
import { PriceStatComponent } from './pages/price-stat/price-stat.component';
import { PersonalStatComponent } from './pages/personal-stat/personal-stat.component';
import { HeaderComponent } from './header/header/header.component';
import { BtnBarComponent } from './header/btn-bar/btn-bar.component';
import { BasicBoxComponent } from './components/basic-box/basic-box.component';
import { InBoxComponent } from './components/in-box/in-box.component';
import { BoxheaderComponent } from './components/boxheader/boxheader.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    ChartComponent,
    GlobalStatComponent,
    AuctionStatComponent,
    StakingStatComponent,
    PriceStatComponent,
    PersonalStatComponent,
    HeaderComponent,
    BtnBarComponent,
    BasicBoxComponent,
    InBoxComponent,
    BoxheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
