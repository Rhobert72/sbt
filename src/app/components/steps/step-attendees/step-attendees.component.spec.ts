import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAttendeesComponent } from './step-attendees.component';

describe('StepAttendeesComponent', () => {
  let component: StepAttendeesComponent;
  let fixture: ComponentFixture<StepAttendeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepAttendeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
