import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBoxComponent } from './basic-box.component';

describe('BasicBoxComponent', () => {
  let component: BasicBoxComponent;
  let fixture: ComponentFixture<BasicBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
