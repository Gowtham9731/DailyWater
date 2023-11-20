import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  signupUrl="https://retoolapi.dev/BCxzLm/signup";
  insertUsers(user:any){
    return this.http.post('https://retoolapi.dev/BCxzLm/signup',user);
  }
}
