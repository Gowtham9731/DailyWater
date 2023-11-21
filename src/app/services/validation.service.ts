import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(public http: HttpClient) { }

  // signupUrl="https://retoolapi.dev/BCxzLm/signup";
  getSignup(data:any){
    return this.http.post('https://retoolapi.dev/BCxzLm/signup',data).subscribe();
  }

  getUsers(){
    return this.http.get('https://retoolapi.dev/BCxzLm/signup');
  }
}

