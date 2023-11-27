import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
getLogin() {
throw new Error('Method not implemented.');
}
  httpclient: any;
  signupMsg: string="";
  msg: string='';
  yname:string='';
  ymobnum:string='';
  yemail:any='';
  ypassword:any;
  user:string='';
  admin:string='';

  constructor(private httpClient:HttpClient){}
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  // }
  signUpuser() {
  let user={
    yname:this.yname,
    ymobnum:this.ymobnum,
    yemail:this.yemail,
    ypassword: this.ypassword,
    user:this.user,
    admin:this.admin
   }
  // step 3: Send api to Postcall..,

  this.httpclient.post("https://retoolapi.dev/BCxzLm/signup",user).subscribe(
    ()=>{
      this.signupMsg="Submit SuccessFully...";
    }
    // error =>{
    //   this.signupMsg="Unable to Create User...Try Again...";
    // }
  );

}
}
// signUpuser() {

//    }
// signupMsg: string="";
//   msg: string='';
//   yname:string='';
//   ymobnum:string='';
//   yemail:any='';
//   ypassword:any;
//   user:string='';
//   admin:string='';
  // http: any;
  // username:string='';
  // password:string='';
  // signInURL:string="https://retoolapi.dev/BCxzLm/signup";


  // constructor(public router:Router,public validationService: ValidationService){}
  // ngOnInit(){

  // }
  // }
  
  
  // getLogin(){

    
  //   if(this.username=='hello' && this.password=='1234'){
  //     this.router.navigate(['/home']);
  //     alert("UserName & Password Matched");
  //   }else{
  //     alert("Not Matched");
  //   }
  // }
 

