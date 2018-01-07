import {ChangeDetectionStrategy, Component} from "@angular/core";
import {FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  public mainForm = this._fb.group({
        steps: this._fb.array([])
    });

  public resetForm = 0;

  constructor(private _fb: FormBuilder) {}

  onSubmit(){

    console.log('FORM SUBMITTED:',this.mainForm.value);
    this.mainForm.reset();
    this.resetForm++;

      const steps = <FormArray>this.mainForm.controls.steps;
      for(let i = 0; i < steps.length; i++){
          console.log(`form ${i} status: `,steps.at(i).valid);
      }
      console.log('main form status:', this.mainForm.valid);
      console.log('main form status:', this.mainForm);

  }

}
