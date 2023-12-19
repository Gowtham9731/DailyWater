import { Component } from '@angular/core';

@Component({
  selector: 'app-staffentry',
  templateUrl: './staffentry.component.html',
  styleUrls: ['./staffentry.component.scss']
})
export class StaffentryComponent {

  panelOpenState = false;
yourname: any;
mobnum: any;
email: any;

step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
