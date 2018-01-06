import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepBadgesAccommodationComponent } from './step-badges-accommodation.component';

describe('StepBadgesAccommodationComponent', () => {
  let component: StepBadgesAccommodationComponent;
  let fixture: ComponentFixture<StepBadgesAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepBadgesAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepBadgesAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
