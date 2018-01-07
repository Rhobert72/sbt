import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-step-badges-accommodation',
  templateUrl: './step-badges-accommodation.component.html',
  styleUrls: ['./step-badges-accommodation.component.css']
})
export class StepBadgesAccommodationComponent implements OnInit {

    @Input() mainForm: FormGroup;

    public step = this._fb.group({
        nameOnBadges: new FormControl('', Validators.required),
        specialAccommodation: new FormControl('', Validators.required)
    });

    public stepBackgroundColor = '#b6e4fb';

    constructor(private _fb: FormBuilder) {}

    ngOnInit() {}

    onChangeBadges(flag){
        if(flag === 'yes'){
            this.step.addControl('companyName', new FormControl('',Validators.required));
        }
        else if(this.step.contains('companyName')){
            this.step.removeControl('companyName');
        }
    }

    isCompanyNameRequired(){
        return this.step.controls.nameOnBadges.value === 'yes';
    }

}
