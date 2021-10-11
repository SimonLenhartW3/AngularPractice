import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionStatComponent } from './auction-stat.component';

describe('AuctionStatComponent', () => {
  let component: AuctionStatComponent;
  let fixture: ComponentFixture<AuctionStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuctionStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
