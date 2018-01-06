import {Component, Input, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-step-attendees',
  templateUrl: './step-attendees.component.html',
  styleUrls: ['./step-attendees.component.css']
})
export class StepAttendeesComponent implements OnInit {

    @Input() mainForm: FormGroup;

    public step = this._fb.group({
        attendees: this._fb.array([])
    });

    public stepBackgroundColor = '#c2fdbc';

    private optionsNumber = 5;
    public optionsList: number[];
    public attendeesList: FormArray;

    constructor(private _fb: FormBuilder) {}

    ngOnInit() {
      this.attendeesList = this.getAttendeesFormArray();
      this.fillAttendeesSelect();
    }

    fillAttendeesSelect() {
        this.optionsList = new Array(this.optionsNumber).fill(1).map((num, index) => {
            return index + 1;
        });
    }

    showAttendeesList(num) {
        const numOfAttendees = +num;
        this.step.setControl('attendees',this._fb.array([]));

        if(num > 0){
            this.attendeesList = this._fb.array(new Array(numOfAttendees).fill(1).map( elem => new FormControl('', Validators.required)));

            this.step.setControl('attendees',this.attendeesList);
        }


    }

    resetAttendeesList(){
      this.step.controls.attendees = this._fb.array([]);
    }

    getAttendeesFormArray(){
      return <FormArray>this.step.controls.attendees;
    }

}
