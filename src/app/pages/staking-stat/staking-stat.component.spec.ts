import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingStatComponent } from './staking-stat.component';

describe('StakingStatComponent', () => {
  let component: StakingStatComponent;
  let fixture: ComponentFixture<StakingStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakingStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakingStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
