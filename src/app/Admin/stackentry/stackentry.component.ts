import { Component } from '@angular/core';

@Component({
  selector: 'app-stackentry',
  templateUrl: './stackentry.component.html',
  styleUrls: ['./stackentry.component.scss']
})
export class StackentryComponent {

  // cards = Array.from({ length: 8 }, (_, index) => index + 1);

  cards = [
    { id: 1, title: '20 litters Jar', image: '../../../assets/images/Products/20-litter.jpeg',stock:"50"},
    { id: 2, title: '10 litters Jar',  image: '../../../assets/images/Products/10-litters.webp',stock:"100" },
    { id: 3, title: '5 litters Jar',  image: '../../../assets/images/Products/5-litters.png',stock:"200"},
    { id: 4, title: '2 litters',  image: '../../../assets/images/Products/2-litter-beily.webp' },
    { id: 5, title: '1 litter',  image: '../../../assets/images/Products/1-liter-bisleri.jpg' },
    { id: 6, title: '600 Ml',  image: '../../../assets/images/Products/500-ml.jpg' },
    { id: 7, title: '500 Ml',  image: '../../../assets/images/Products/500-ml.jpg' },
    { id: 8, title: '300 Ml', image: '../../../assets/images/Products/300ml-1.jpg' },

    // Add more cards as needed
  ];
// stock: any;
input:any;
total: any;

// add(){
//   if (this.cards[0]?.stock1 !== undefined && this.cards[0]?.stock1 !== undefined && this.input != undefined && this.input!='') {
//     // this.total = this.cards[0].stock + this.input;
//     this.total = Number(this.cards[0].stock1) + this.input;
//   } else {
//     alert('Invalid card or input value.');
//   }
// }

add(cardIndex: number) {
  const selectedCard = this.cards[cardIndex];
  if (selectedCard?.stock !== undefined && this.input !== undefined && this.input !== '') {
    this.total = Number(selectedCard.stock) + this.input;
  } else {
    alert('Invalid card or input value.');
  }
}
}
