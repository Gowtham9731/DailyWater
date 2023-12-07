import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
gendervalue: any;

Edit() {
throw new Error('Method not implemented.');
}
  membership:string='';
 yourname:string='';
  mobnum: any;
  email: any;
  male:string='';
  female:string='';
  others:string='';
  Home: any;
  Apartment: any;
  Office: any;
  joindate: any;
  homeaddr: any;
  aparmentaddr: any;
  officeaddr: any;

    url:string="https://retoolapi.dev/a89ajD/register";

  constructor(private httpClient: HttpClient){}
  
    
    
    ngOnInit(): void {
      this.showProfile();
    }
    
    showProfile(){
      // let userMobile = sessionStorage.getItem('userMobile') || '';
      // let apiUrl = ApiUrls.userApi + "?mobile=" + userMobile;
      this.httpClient.get(this.url).subscribe(
        (data: any) => {
          if(data.length > 0){
            this.yourname = data[0].yourname;
            this.email = data[0].email;
            this.mobnum = data[0].mobnum;
            this.membership=data[0].membership;
            this.male=data[0].male;
            this.female=data[0].female;
            this.others=data[0].others;
            this.Home=data[0].home;
            this.Apartment=data[0].Apartment;
            this.Office=data[0].Office;
            this.joindate=data[0].joindate;
            this.homeaddr=data[0].homeaddr;
            this.aparmentaddr=data[0].aparmentaddr;
            this.officeaddr=data[0].officeaddr;
          }
        }
      );

 }
}




// // Profile .ts....Abi


// // userName : string = '';
// // mobile : string = '';
// // email : string = '';
// // accounts : any = [];
// // accNo : string = '';
// // balance : string = '';
// // bankName : string = '';
// // addAccLink : string = '/addAccount';
// // accUrl : string = 'https://retoolapi.dev/RL6DNH/besiUpiAcc';

// // constructor(private httpClient: HttpClient){
  
// // }

// // ngOnInit(): void {
// //   this.showProfile();
// // }

// // showProfile(){
// //   let userMobile = sessionStorage.getItem('userMobile') || '';
//   // let apiUrl = ApiUrls.userApi + "?mobile=" + userMobile;
// //   this.httpClient.get(apiUrl).subscribe(
// //     (data: any) => {
// //       if(data.length > 0){
// //         this.userName = data[0].username;
// //         this.email = data[0].email;
// //         this.mobile = data[0].mobile;
// //         sessionStorage.setItem('userName', this.userName);
// //       } 
// //     },
// //     error => {}
// //   );
// //   let accApiUrl = ApiUrls.accountApi + '?mobile=' + userMobile;
// //   this.httpClient.get(accApiUrl).subscribe(
// //     (data: any) => {
// //       if(data.length > 0){
// //         // this.accNo = data[0].accNo;
// //         // this.balance = data[0].balance;
// //         // this.bankName = data[0].bankName;
// //         this.accounts = data;
// //       } 
// //     },
// //     error => {}
// //   );
  
// // }


// //  HTML-____>

// // <div class="row">
// // <div class="col"></div>
// // <div class="col"><a [routerLink]="addAccLink">Add Account</a></div>
// // </div>


