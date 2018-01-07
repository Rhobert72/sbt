import {ChangeDetectionStrategy, Component} from "@angular/core";
import {FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public mainForm = this._fb.group({
        steps: this._fb.array([])
    });

  constructor(private _fb: FormBuilder) {}

  onSubmit(){

    console.log('FORM SUBMITTED:',this.mainForm.value);
    this.mainForm.reset();

  }

}
