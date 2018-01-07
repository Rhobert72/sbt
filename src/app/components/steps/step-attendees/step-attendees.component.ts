import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: "app-step-attendees",
    templateUrl: "./step-attendees.component.html",
    styleUrls: ["./step-attendees.component.css"]
})
export class StepAttendeesComponent implements OnInit {

    @Input() mainForm: FormGroup;

    private _reset: number;
    @Input()
    set reset(reset: number) {
        this._reset = reset;
        if (this._reset > 0) {
            /*const a = <FormArray>this.step.controls.attendees;
                for(let i = 0; i < a.length; i++){
                    a.removeAt(i);
                }*/
            this.resetAttendeesList();
            this.resetSelectAttendees();
        }
    }

    get reset(): number {
        return this._reset;
    }

    public step = this._fb.group({
        attendees: this._fb.array([], Validators.minLength(1))
    });


    @ViewChild('selectNumAttendees') selectNumAttendees: ElementRef;

    public stepBackgroundColor = "#c2fdbc";

    private optionsNumber = 5;
    public optionsList: number[];
    public attendeesList: FormArray;

    constructor(private _fb: FormBuilder) {
    }

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
        this.step.setControl("attendees", this._fb.array([]));
        /*const a = <FormArray>this.step.controls.attendees;*/
        if (num > 0) {
            this.attendeesList = this._fb.array(new Array(numOfAttendees).fill(1).map(elem => new FormControl("", Validators.required)));
            this.step.setControl("attendees", this.attendeesList);
            /*new Array(numOfAttendees)
                .fill(1).forEach( elem => {
                a.push(new FormControl('', Validators.required));
            });*/

        }
    }

    resetAttendeesList() {
        this.attendeesList = this._fb.array([]);
    }

    resetSelectAttendees(){
        this.selectNumAttendees.nativeElement.value = 0;
    }

    getAttendeesFormArray() {
        return <FormArray>this.step.controls.attendees;
    }

}
