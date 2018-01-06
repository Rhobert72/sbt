import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertValidStepComponent } from './alert-valid-step.component';

describe('AlertValidStepComponent', () => {
  let component: AlertValidStepComponent;
  let fixture: ComponentFixture<AlertValidStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertValidStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertValidStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
