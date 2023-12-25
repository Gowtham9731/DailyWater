import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{

  adminHeader : boolean = false;
  userHeader : boolean = false;

  ngOnInit(): void {
    let userType =  sessionStorage.getItem('user') || '';
    if(userType == 'admin'){
      this.adminHeader = true;
    }else if(userType == 'user'){
      this.userHeader = true;
    }
  }

}
