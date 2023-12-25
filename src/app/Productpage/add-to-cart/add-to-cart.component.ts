import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  count: number = 1;
  cost: number = 80;
  offer: number = 60;
  protitle: string='';
  imgSrc: string='../../../assets/images/Products/20-litter.jpeg';

  constructor(private httpClient: HttpClient,private router:Router,private apiservice:ApiService){}

  onincrement() {
    this.count++;
    this.cost = this.count * 80;
    this.offer = this.count * 60;
  }

  ondecrement() {
    if (this.count > 1) {
      this.count--;
      this.cost = this.count * 80;
      this.offer = this.count * 60;
    }
  }
  buy() {

    let payment = {
      imgSrc: this.imgSrc,
      protitle: this.protitle,
      offer:this.offer,
      count:this.count
    }

    this.httpClient.post('https://retoolapi.dev/wudrYt/addToCart',payment).subscribe(
      ()=>{
        alert('Submitted Succesfully...');
      }
    );
  }


}
