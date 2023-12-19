import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiUrls';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  http: any;
usertype: any;
userType: any;
  
  //loose Coupling - Dependency Injection used
  constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) { }
  signupMsg: string = "";
  msg: string = '';
  username: string = '';
  mobnum: string = '';
  email: any = '';
  password: any;
  user:any;
  admin: any;
  // dataas:any[]=[];



  // chckChange(){
  //   this.loginChck = !this.loginChck;
  // }

  validateUserData() {
    if (this.username != '' && this.mobnum != '' && this.email != ''
      && this.password != '' )
     {
      return true;
    }
    else {
      alert("Need all data so check once you gives...");
    }
    return false;
  }

  resetAll(){
    this.usertype='';
    this.username='';
    this.mobnum='';
    this.email='';
    this.password='';

  }

  signUpuser() {
    // alert(this.loginChck);
    // alert(this.user);
    if (this.validateUserData()) {

      //step1 getdata
      //step2 create obj

      let userdata = {
        // user: this.user,
        // admin: this.admin,
        usertype:this.usertype,
        username: this.username,
        mobnum: this.mobnum,
        email: this.email,
        password: this.password,
      }
      //step3 send to api as postcall
      //needed httpmethod called POST, -> HttpClient obj -> HttpClientModule
      // console.log(userdata);
    this.httpClient.post("https://retoolapi.dev/BCxzLm/signup", userdata).subscribe(
    () => {
      alert("Registered Successfully... Please Login to continue....");
      setTimeout(() => {
        // sessionStorage.setItem('signUpuser',JSON.stringify({usertype:"admin"}));
        // this.router.navigate(['']);
      }, 2000);
      this.resetAll();
    },
    error => {
      alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
    }
  );
}
  
}
  

//  Get Methods for login..........

// userName: string = '';
// passWord: string = '';
// selectedUserType = 'user';
// dataas:any[]=[];
// getLogin() {
//   if (this.username != '' && this.password != '' && this.userType!=''){
//     let dataa = "username=" + this.username + "&password=" + this.password +"userType"+this.userType;
//     this.apiservice.getdata( 'https://retoolapi.dev/BCxzLm/signup').subscribe(
//       (data: any) => {
//         // this.dataas=data;
//         // for( let data of this.dataas){
//           if(data[0].username == this.username && data[0].password == this.password ){
//             sessionStorage.setItem("user",data[0].usertype);
//             this.router.navigate(['home']);
//           }
//           else if(data.username == this.username && data.password == this.password){
//             sessionStorage.setItem("user",data[0].usertype);
//             this.router.navigate(['adminheader']);
//           }
//           else{
//             alert("Select Any Option");
//           }
//       });
//         }
//       }
//     }

// dataa:any[]=[];

// chatGpt code...

// getLogin() {
//   if (this.username !== '' && this.password !== '' && this.userType !== '') {
//     let dataa = "username=" + this.username + "&password=" + this.password + "&userType=" + this.userType;
//     this.apiservice.getdata(dataa).subscribe(
//       (data: any) => {
//         if (data.length > 0) {
//           if (data[0].username === this.username && data[0].password === this.password) {
//             sessionStorage.setItem("user", data[0].usertype);
//             if (data[0].usertype === 'user') {
//               this.router.navigate(['/home']);
//             } else if (data[0].usertype === 'admin') {
//               this.router.navigate(['/adminhome']);
//             } else {
//               alert("Invalid UserType");
//             }
//           } else {
//             alert("Invalid Username or Password");
//           }
//         } else {
//           alert("User not found");
//         }
//       },
//       error => {
//         console.error("An error occurred:", error);
//         alert("An error occurred. Please try again.");
//       }
//     );
//   } else {
//     alert("Please fill in all fields");
//   }
// }
// }


getLogin() {
  if (this.username !== '' && this.password !== '' && this.userType !== '') {
    let dataa = "username=" + this.username + "&password=" + this.password + "&userType=" + this.userType;
    this.apiservice.getdata(dataa).subscribe(
      (data: any) => {
        if (data.length > 0) {
          if (data[0].username === this.username && data[0].password === this.password) {
            sessionStorage.setItem("user", data[0].usertype);
            if (data[0].usertype === 'user') {
              if(this.userType=='user'){
                this.router.navigate(['/home']);
              }else{
                alert("Select User Type")
              }
            } else if (data[0].usertype === 'admin'){
              if(this.userType=='admin'){
                this.router.navigate(['/adminhome']);
              }else{
                alert("Select Admin Option..")
              }
            } else {
              alert("Invalid UserType");
            }
          } else {
            alert("Invalid Username or Password");
          }
        } else {
          alert("User not found");
        }
      
      },
      
      error => {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again.");
      }
    );
  } else {
    alert("Please fill in all fields");
  }
}
}






    // Filter Applied
    // let appliedFilters = [];
    // appliedFilters.push("username=" + this.userName);
    // appliedFilters.push("password=" + this.password);
    // console.log(appliedFilters);

    // this.apiservice.getApiDataByfilter(ApiUrls.signUpApi, appliedFilters).subscribe(
    // let dataa = "username=" + this.username + "&password=" + this.password +"userType"+this.userType;
    
    // this.apiservice.getdata('https://retoolapi.dev/BCxzLm/signup').subscribe(
    //   (data: any) => {
    //     this.dataas=data;
    //     // console.log(data);
    //     // Check the user details using Conditional
    //     for( let data of this.dataas){
    //     if (data.username == this.username && data.password == this.password &&this.userType==data.usertype) {
    //       // console.log(data[0].designation);
    //       this.router.navigate(['home'])
    //     }  
    //     console.log(data.username);
    //     console.log(this.username);
        
        
  //     }
  //   })
  // }
  //   else
  //       alert('not matched')

  //         if (data[0].usertype == "user") {
  //           if (this.userType = "user") {
  //             // sessionStorage.setItem('userMobile', data[0].mobile);
  //             this.router.navigate(['/home']);
  //           } else {
  //             alert("Select User Option");
  //           }
  //         }
  //         else if (data[0].usertype == "admin") {
  //           if (this.selectedUserType = "admin") {
  //             // sessionStorage.setItem('userMobile', data[0].mobile);
  //             this.router.navigate(['/aboutus']);
  //           } else {
  //             alert("Select Admin Option");
  //           }
  //         }
  //         else {
  //           this.msg = "Invalid UserName or Password...";
  //         }
  //       }
  //     }
  //     }
  //   );
  // } else {
  //   this.msg = "Username or Password is missing..."
  // }
// }
// }

