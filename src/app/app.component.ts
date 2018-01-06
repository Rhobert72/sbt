import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{

  public mainForm = this._fb.group({
        steps: this._fb.array([])
    });

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {

  }

  onSubmit(){
    const steps = <FormArray>this.mainForm.controls.steps;
    for(let i = 0; i < steps.length; i++){
      console.log(`form ${i} status: `,steps.at(i).valid);
    }
    console.log('main form status:', this.mainForm.valid);
    console.log(this.mainForm.value);
  }

}
