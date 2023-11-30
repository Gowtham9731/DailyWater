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
  http: any;

  //loose Coupling - Dependency Injection
  constructor(private httpClient : HttpClient, private router : Router){}
   signupMsg: string="";
    msg: string='';
    username:string='';
    mobnum:string='';
    email:any='';
    password:any;
    designation:string='';
  
   validateUserData() {
    if(this.username != '' && this.mobnum != '' && this.email != '' 
      && this.password != ''
      //  && this.cfPassword != '' 
      // && this.password == this.cfPassword
      )
      {
        return true;
       }
      else{
        this.msg = "Need all data and Password and Confirm Password should be same";
      }
    return false;
     }

   signUpuser() {
    if (this.validateUserData()) {

      //step1 getdata
      //step2 create obj
      let user = {
        username:this.username,
        mobnum:this.mobnum,
        email:this.email,
        password: this.password,
        designation:this.designation
        // username: this.userName,
        // mobile: this.mobile,
        // email: this.email,
        // password: this.password
       }
      //step3 send to api as postcall
      //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
      this.httpClient.post("https://retoolapi.dev/BCxzLm/signup",user).subscribe(
        () => {
          alert("Registered Successfully... Please Login to continue....");
          setTimeout(()=>{
            // this.router.navigate(['']);
          }, 3000);
        },
        error => {
          // this.msg = "Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.";
        }
      );
    }
  }

  //  Get Methods...........

  // username : string = '';
  // password: string='';
  user:string='';
  admin:string='';
  url : string = 'https://retoolapi.dev/BCxzLm/signup';

 getLogin() {

  this.msg = '';
      if(this.username != '' && this.password != ''){

        // let apiUrl = this.url + "?username=" + this.username + "&password=" + this.password;

        this.http.get(this.url).subscribe(
          (data : any)=> {
            console.log(data);
            if(data.length > 0 && data[0].username == this.username && data[0].password == this.password){
              sessionStorage.setItem('userMobile', data[0].mobile);
              this.router.navigate(['/home']);
            }else{
              this.msg = "Invalid UserName or Password...";
            }
          },
          () => {}
        );
      }else{
        this.msg = "Username or Password is missing..."
      }
    }
}


  // export class LoginComponent{

  //   userName : string = '';
  //   password : string = '';
  //   msg : string = '';
  //   url : string = 'https://retoolapi.dev/IBQleY/besiUpiUser';
  
  //   constructor(private http: HttpClient, private router: Router){}
  
  //   resetData(){
  //     this.userName = '';
  //     this.password = '';
  //   }
  
  //   validateLogin(){
  
  //     this.msg = '';
  //     if(this.userName != '' && this.password != ''){
  //       let apiUrl = this.url + "?username=" + this.userName + "&password=" + this.password;
  //       this.http.get(apiUrl).subscribe(
  //         (data : any)=> {
  //           console.log(data);
  //           if(data.length > 0 && data[0].username == this.userName && data[0].password == this.password){
  //             sessionStorage.setItem('userMobile', data[0].mobile);
  //             this.router.navigate(['/profile']);
  //           }else{
  //             this.msg = "Invalid UserName or Password...";
  //           }
  //         },
  //         error => {}
  //       );
  //     }else{
  //       this.msg = "Username or Password is missing..."
  //     }
  //   }
  
  // }
  

