import {OnInit, Input, Output, EventEmitter} from "@angular/core";
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";

export abstract class StepComponent implements OnInit {

    @Input() mainForm: FormGroup;

    @Output() registerStep: EventEmitter<AbstractControl> = new EventEmitter<AbstractControl>();

    public step: FormGroup;

    public stepIndex: number;

    constructor(protected _fb: FormBuilder){}

    ngOnInit(){
        const steps = <FormArray> this.mainForm.controls.steps;
        this.stepIndex = steps.length;
        this.registerStep.emit(this.step);
    }

}
