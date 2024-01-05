import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

  patientReg: boolean = false;
  title: any;
  image: any;
  offer: any;
  price: any;
  data: any;
  constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) { }


  cards = [
    { id: 1, title: '20 litters Jar', image: '../../../assets/images/Products/20-litter.jpeg', offer: "60", price: "120" },
    { id: 2, title: '10 litters Jar', image: '../../../assets/images/Products/10-litters.webp', offer: "55", price: "110" },
    { id: 3, title: '5 litters Jar', image: '../../../assets/images/Products/5-litters.png', offer: "50", price: "100" },
    { id: 4, title: '2 litters', image: '../../../assets/images/Products/2-litter-beily.webp', offer: "40", price: "80" },
    { id: 5, title: '1 litter', image: '../../../assets/images/Products/1-liter-bisleri.jpg', offer: "35", price: "70" },
    { id: 6, title: '600 Ml', image: '../../../assets/images/Products/500-ml.jpg', offer: "25", price: "50" },
    { id: 7, title: '500 Ml', image: '../../../assets/images/Products/500-ml.jpg', offer: "20", price: "40" },
    { id: 8, title: '300 Ml', image: '../../../assets/images/Products/300ml-1.jpg', offer: "10", price: "20" },

  ];

  // cardId = 1; // Replace with the actual ID you want to fetch
  // cardData: any;


  selectedCard: any; // Variable to store the selected card

  // addToCart(card: any) {
  //   this.selectedCard = card;
  //   console.log('Selected Card:', this.selectedCard);
  //   const dataToSend = {
  //     title: this.selectedCard.title,
  //     image: this.selectedCard.image,
  //     offer: this.selectedCard.offer,
  //     price: this.selectedCard.price
  //   };

  //   // if(this.title==this.selectedCard.title){
  //   //   this.router.navigate(['/addtocart']);

  //   // }

  //   this.apiservice.geturl('https://retoolapi.dev/AZRr51/shopping').subscribe(
  //     (response:any)=>{
  //     //  console.log(response);
  //         for(let data of response){
  //         console.log(data);
  //         if(this.selectedCard.price==this.data.price){
  //             this.router.navigate(['/addtocart']);
        
  //           }else{
  //             alert("Error");
  //           }
          
  //         }
  //     }
  //     )
  //   }


  // Second Try:
  addToCart(card: any) {
  // this.selectedCard = card;
  // console.log('Selected Card:', this.selectedCard);
  // // const dataToSend = {
  //   title: this.selectedCard.title,
  //   image: this.selectedCard.image,
  //   offer: this.selectedCard.offer,
  //   price: this.selectedCard.price
  // };

  this.selectedCard = {
    title: card.title,
    image: card.image,
    offer: card.offer,
    price: card.price,
  };

  console.log('Selected Card:', this.selectedCard); // Log the selected card details

  this.apiservice.geturl('https://retoolapi.dev/AZRr51/shopping').subscribe(
    (response: any) => {
      for (let data of response) {
        // console.log(data);
        // Compare prices with a tolerance threshold (e.g., 0.01)
        if (Math.abs(parseFloat(this.selectedCard.price) - parseFloat(data.price)) < 0.01) {
          this.router.navigate(['/addtocart']);
          this.patientReg = true;
        } else {
          // alert("Error");
        }
      }
    }
  );
}

// Third Try:

// addToCart(card: any) {

//   this.apiservice.setSelectedCard(card);

//   this.selectedCard = card;
//   console.log('Selected Card:', this.selectedCard);
//   const dataToSend = {
//     title: this.selectedCard.title,
//     image: this.selectedCard.image,
//     offer: this.selectedCard.offer,
//     price: this.selectedCard.price
//   };

//   this.apiservice.geturl('https://retoolapi.dev/AZRr51/shopping').subscribe(
//     (data: any) => {

//       if(data.length>0){
//         if((parseFloat(this.selectedCard.price)==parseFloat(data.price))){
//           alert("Price Matched");
//           this.router.navigate(['/addtocart']);
//         }

//       }else{
//         alert("No Data");
//       }
//     }

//       // Filter the response based on the selected card's price
//     //   const matchingData = response.filter((data:any) => Math.abs(parseFloat(this.selectedCard.price) - parseFloat(data.price)) < 0.01);
//     //   if (matchingData.length > 0) {
//     //     this.router.navigate(['/addtocart']);
//     //   } else {
//     //     // alert("Error");
//     //   }
//     // }
//   );
// }





    // console.log(this.selectedCard);

    // this.apiservice.postApiData('https://retoolapi.dev/AZRr51/shopping', dataToSend).subscribe(
    //   () => {
    //     alert('Submitted Succesfully...');
    //     // this.router.navigate(['/addtocart']);
    //   }
    // );
  // }

  // this.apiservice.getCardById(this.cardId).subscribe(
  //   (response) => {
  //     console.log('Success:', response);
  //     this.cardData = response;
  //     alert('Submitted Succesfully...');
  //     // this.router.navigate(['/addtocart']);
  //     this.patientReg = true;
  //   },
  //   (error) => {
  //     console.error('Error:', error);
  //   }
  // );
  // }
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



// }
