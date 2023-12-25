import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent {

  constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) { }


  cards = [
    { id: 1, title: '20 litters Jar', image: '../../../assets/images/Products/20-litter.jpeg', offer: "60", price: "120" },
    { id: 2, title: '10 litters Jar', image: '../../../assets/images/Products/10-litters.webp', offer: "55", price: "110" },
    { id: 3, title: '5 litters Jar', image: '../../../assets/images/Products/5-litters.png', offer: "50", price: "100" },
    { id: 4, title: '2 litters', image: '../../../assets/images/Products/2-litter-beily.webp', offer: "40", price: "80" },
    { id: 5, title: '1 litter', image: '../../../assets/images/Products/1-liter-bisleri.jpg', offer: "35", price: "700" },
    { id: 6, title: '600 Ml', image: '../../../assets/images/Products/500-ml.jpg', offer: "25", price: "50" },
    { id: 7, title: '500 Ml', image: '../../../assets/images/Products/500-ml.jpg', offer: "20", price: "40" },
    { id: 8, title: '300 Ml', image: '../../../assets/images/Products/300ml-1.jpg', offer: "10", price: "20" },

    // Add more cards as needed
  ];

  addToCart(card:any){
  this.httpClient.post('https://retoolapi.dev/wudrYt/addToCart',this.cards).subscribe(
      ()=>{
        alert('Submitted Succesfully...');
      }
    );

    }

  // addToCart(card: any) {
  //   const payload = JSON.stringify(card);
  //   this.httpClient.post('https://retoolapi.dev/wudrYt/addToCart', payload, {
  //     headers: { 'Content-Type': 'application/json' },
  //   }).subscribe(
  //     () => {
  //       alert('Card details posted successfully!');
  //     },
  //     (error) => {
  //       console.error('Error posting card details:', error);
  //       alert('Failed to post card details. Please try again.');
  //     }
  //   );
  // }



}

