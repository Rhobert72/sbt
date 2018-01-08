import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {StepComponent} from "../step.component";

@Component({
    selector: "app-step-rock",
    templateUrl: "./step-rock.component.html",
    styleUrls: ["./step-rock.component.css"]
})
export class StepRockComponent extends StepComponent {

    public step = this._fb.group({
        youRock: new FormControl("", Validators.required)
    });

    public stepBackgroundColor = '#f6c1a1';

    constructor(protected _fb: FormBuilder){
        super(_fb);
    }

    onChange(checked) {
        if (!checked) {
            this.step.controls.youRock.setValue("");
        }
    }

}
