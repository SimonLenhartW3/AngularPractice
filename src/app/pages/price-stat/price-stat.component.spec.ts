import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceStatComponent } from './price-stat.component';

describe('PriceStatComponent', () => {
  let component: PriceStatComponent;
  let fixture: ComponentFixture<PriceStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
