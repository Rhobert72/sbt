import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  StepRockComponent,
    StepBadgesAccommodationComponent,
    StepAttendeesComponent,
    StepContainerComponent,
    AlertValidStepComponent } from './components/';

const components = [
    StepRockComponent,
    StepBadgesAccommodationComponent,
    StepAttendeesComponent,
    StepContainerComponent,
    AlertValidStepComponent
];

@NgModule({
  declarations: [
    AppComponent,
      ...components
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
