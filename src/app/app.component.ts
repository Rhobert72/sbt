import {AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormArray, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public mainForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(){
      this.mainForm = this._fb.group({
          steps: this._fb.array([])
      });
  }

  onSubmit(){
    console.log('FORM SUBMITTED:',this.mainForm.value);
    this.mainForm.reset();
  }

  onRegisterStep(step) {
    const steps = <FormArray>this.mainForm.controls.steps;
    steps.push(step);
  }

}
