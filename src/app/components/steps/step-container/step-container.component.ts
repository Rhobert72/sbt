import { Component, OnInit, Input } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.css']
})
export class StepContainerComponent implements OnInit {

    @Input() mainForm: FormGroup;

    @Input() step: FormGroup;

    @Input() bgcolor: string;

    public stepIndex: number;
    private formSteps: FormArray;

    public stepStyle = {};

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.formSteps = this.getSteps();
        this.stepIndex = this.formSteps.length;
        this.formSteps.push(this.step);

        this.stepStyle = {
            'background-color': this.bgcolor
        };
    }

    isDisabled(){
        return this.stepIndex === 0? false: this.formSteps.at(this.stepIndex - 1).invalid || this.formSteps.at(this.stepIndex - 1).pristine;
    }

    getSteps(){
        return <FormArray>this.mainForm.controls.steps;
    }

    isFormValid(){
        return this.formSteps.at(this.stepIndex).valid;
    }

    isLastStep(){
        return this.stepIndex === this.getSteps().length -1;
    }

}
