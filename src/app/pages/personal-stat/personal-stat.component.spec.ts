import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalStatComponent } from './personal-stat.component';

describe('PersonalStatComponent', () => {
  let component: PersonalStatComponent;
  let fixture: ComponentFixture<PersonalStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
