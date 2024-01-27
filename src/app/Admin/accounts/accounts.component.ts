// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],

})
export class AccountsComponent {

  imagePath = '../../../assets/images/Products/20-litter.jpeg';

  constructor(public apiservice: ApiService) { }

  sendImage() {
    this.apiservice.imagePath = this.imagePath;
    console.log(this.imagePath);

  }

}

