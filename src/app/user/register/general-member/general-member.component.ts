import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-general-member',
  templateUrl: './general-member.component.html',
  styleUrls: ['./general-member.component.scss']
})
export class GeneralMemberComponent {
  constructor(private httpClient:HttpClient){}

  // membership: string='';
   yourname: string='';
   mobnum: any;
   email: any;
   male: string='';
   female:string='';
   others:string='';
   Home: string='';
   Apartment: string='';
   Office: string='';
   joindate: any;
   homeaddr:string='';
   aparmentaddr:string='';
   officeaddr:any;
 //  registerApi:string="https://retoolapi.dev/a89ajD/register";
  
 submitData() {

   let userData={
    //  membership:this.membership,
     yourname:this.yourname,
     mobnum:this.mobnum,
     email:this.email,
     male:this.male,
     female:this.female,
     others:this.others,
     Home:this.Home,
     Apartment:this.Apartment,
     Office:this.Office,
     joindate:this.joindate,
     homeaddr:this.homeaddr,
     aparmentaddr:this.aparmentaddr,
     officeaddr:this.officeaddr
   }
   this.httpClient.post("https://retoolapi.dev/a89ajD/register",userData).subscribe(
       () => {
         alert("Registered Successfully...");
         setTimeout(()=>{
           // this.router.navigate(['']);
         }, 3000);
       
       },
       error => {
         // this.msg = "Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.";
       }
     );
     this.Reset();
   }
   Reset() {
  //  this. membership ='';
   this.mobnum='';
   this.yourname='';
   this.email='';
   this.male='';
   this.female='';
   this.others='';
   this.Home='';
   this.Apartment='';
   this.Office='';
   this.joindate='';
   this.homeaddr='';
   this.aparmentaddr='';
   this.officeaddr='';
   }
    
}
