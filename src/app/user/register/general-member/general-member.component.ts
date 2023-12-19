import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-general-member',
  templateUrl: './general-member.component.html',
  styleUrls: ['./general-member.component.scss']
})
export class GeneralMemberComponent {
  yourname: string = '';
  mobnum: any;
  email: any;
  gender: any;
  homeAddr: any;
  apartmentAddr: any;
  officeAddr: any;
  constructor(private httpClient: HttpClient) { }


  //  registerApi:string="https://retoolapi.dev/a89ajD/register"; 

  checkInputs() {
    if(this.yourname != '' && this.mobnum != '' && this.email != '' && this.gender != '' && this.homeAddr != '' && this.apartmentAddr != '' && this.officeAddr != ''){
      return true;
    } else {
      alert("Need to all fields must Entry..")
    }
    return false;
  }
  submitData() {
    if (this.checkInputs()) {

      let userData = {
        yourname: this.yourname,
        mobnum: this.mobnum,
        email: this.email,
        gender: this.gender,
        homeAddr: this.homeAddr,
        apartmentAddr: this.apartmentAddr,
        officeAddr: this.officeAddr
      }

      this.httpClient.post("https://retoolapi.dev/a89ajD/register", userData).subscribe(
        () => {
          alert("Registered Successfully...");
          setTimeout(() => {
            // this.router.navigate(['']);
          }, 3000);

        },
        error => {
          // this.msg = "Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.";
        }
      );
      this.Reset();
    }
  }
  Reset() {
    this.mobnum = '';
    this.yourname = '';
    this.email = '';
    this.gender = '';
    this.homeAddr = '';
    this.apartmentAddr = '';
    this.officeAddr = '';
  }
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
