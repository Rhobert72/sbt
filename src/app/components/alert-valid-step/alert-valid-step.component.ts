import {ChangeDetectionStrategy, Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-alert-valid-step',
  templateUrl: './alert-valid-step.component.html',
  styleUrls: ['./alert-valid-step.component.css']
})
export class AlertValidStepComponent {

    @Input() stepStatus: boolean;

    constructor() {}

}
