import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-step-container',
  templateUrl: './step-container.component.html',
  styleUrls: ['./step-container.component.css']
})
export class StepContainerComponent implements OnInit {

    @Input() mainForm: FormGroup;

    @Input() step: FormGroup;
    @Input() stepIndex: number;

    @Input() bgcolor: string;

    private formSteps: FormArray;
    public stepStyle = {};

    constructor() { }

    ngOnInit() {
        this.stepStyle = {
            'background-color': this.bgcolor
        };
        this.formSteps = <FormArray>this.mainForm.controls.steps;
    }

    isDisabled(){
        return !this.arePrevStepsValid();
    }

    isFormValid(){
        return this.step.valid;
    }

    isLastStep(){
        return this.stepIndex === this.formSteps.length - 1;
    }

    arePrevStepsValid(){
        let valid = true;
        let currStep: AbstractControl;
        for(let i = 0; i < this.stepIndex; i++) {
            currStep = this.formSteps.at(i);
            valid = valid && (currStep.valid);
        }
        return valid;
    }

}
