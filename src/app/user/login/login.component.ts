import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  msg: string='';
  yname:string='';
  ymobnum:string='';
  yemail:any='';
  http: any;
  username:string='';
  password:string='';


  constructor(public router:Router,public validationService: ValidationService){}
  ngOnInit(): void {
   this.validationService.getUsers().subscribe();
  }
  
  getLogin(){
    if(this.username=='hello' && this.password=='1234'){
      this.router.navigate(['/home']);
      alert("UserName & Password Matched");
    }else{
      alert("Not Matched");
    }
  }
 
}
