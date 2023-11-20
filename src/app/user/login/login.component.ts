import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  msg: string='';
  uname:string='';
  mobnum:string='';
  email:any='';
  http: any;
  username:string='';
  password:string='';


  constructor(private router:Router){}
  // inputUser(user:any){
  //   return this.http.post('https://retoolapi.dev/BCxzLm/signup',user);
  // }
  getLogin(){
    if(this.username=='hello' && this.password=='1234'){
      this.router.navigate(['/home']);
      alert("UserName & Password Matched");
    }else{
      alert("Not Matched");
    }
  }
  // gotoHome(){
  //   this.router.navigate(['/sign-in']);
  // }

}
