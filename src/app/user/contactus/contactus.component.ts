import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  value = 'Clear me';
  // api="https://retoolapi.dev/jnIL0K/enquiry";

// name: any;
// mobnum: any;
// yourName: any;
// mobNumber: any;
// email: any;
complaint: any;
terms: any;
yourname: any;
mobileNum: any;
emailId: any;

constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) { }

checkFields(){

  if(this.yourname !='' && this.mobileNum!='' && this.emailId!='' && this.complaint!='' && this.terms!=''){
    return true;
  }else{
    alert("Need must all Fields to Entry");
  }
  return false;
}

reset(){
this.yourname='';
this.mobileNum='';
this.emailId='';
this.complaint='';
this.terms='';
}

getEnquiryData(){

  if(this.checkFields()){

    let complain={
      name:this.yourname,
      mobnum:this.mobileNum,
      email:this.emailId,
      complaint:this.complaint,
    }

    this.httpClient.post("https://retoolapi.dev/jnIL0K/enquiry",complain).subscribe(
      ()=>{
        alert("Register Succesfully");
        setTimeout(() => {
          
        }, 2000);
        this.reset();
      },
      error=>{
        alert("Somthing Wrong...Plz Wait...")
      }
      );
  }

}
}
