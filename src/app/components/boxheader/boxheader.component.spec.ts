import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxheaderComponent } from './boxheader.component';

describe('BoxheaderComponent', () => {
  let component: BoxheaderComponent;
  let fixture: ComponentFixture<BoxheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
