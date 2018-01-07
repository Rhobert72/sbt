import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {minLengthArray} from '../../../validators/'
@Component({
    selector: "app-step-attendees",
    templateUrl: "./step-attendees.component.html",
    styleUrls: ["./step-attendees.component.css"]
})
export class StepAttendeesComponent implements OnInit {

    @Input() mainForm: FormGroup;

    public step = this._fb.group({
        numOfAttendees: new FormControl(null, Validators.min(1)),
        attendees: this._fb.array([], minLengthArray(1))
    });

    public stepBackgroundColor = "#c2fdbc";

    private optionsNumber = 5;
    public optionsList: number[];

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
        this.fillAttendeesSelect();
    }

    fillAttendeesSelect() {
        this.optionsList = new Array(this.optionsNumber).fill(1).map((num, index) => {
            return index + 1;
        });
    }

    showAttendeesList(num) {
        const numOfAttendees = +num;
        this.step.setControl("attendees", this._fb.array([], minLengthArray(1)));
        const attendees = <FormArray>this.step.controls.attendees;
        for(let i = 0; i < numOfAttendees; i++){
            attendees.push(new FormControl('', Validators.required));
        }
    }

}
