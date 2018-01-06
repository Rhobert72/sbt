import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRockComponent } from './step-rock.component';

describe('StepRockComponent', () => {
  let component: StepRockComponent;
  let fixture: ComponentFixture<StepRockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepRockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepRockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
