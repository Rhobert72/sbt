import {Component, Input, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
    selector: "app-step-rock",
    templateUrl: "./step-rock.component.html",
    styleUrls: ["./step-rock.component.css"]
})
export class StepRockComponent implements OnInit {

    @Input() mainForm: FormGroup;

    public step = this._fb.group({
        youRock: new FormControl("", Validators.required)
    });

    public stepBackgroundColor = '#f6c1a1';

    constructor(private _fb: FormBuilder) {
    }

    ngOnInit() {
    }

    onChange(checked) {
        if (!checked) {
            this.step.controls.youRock.setValue("");
        }
    }

}
