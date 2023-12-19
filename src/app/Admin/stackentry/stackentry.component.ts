import { Component } from '@angular/core';

@Component({
  selector: 'app-stackentry',
  templateUrl: './stackentry.component.html',
  styleUrls: ['./stackentry.component.scss']
})
export class StackentryComponent {

  // cards = Array.from({ length: 8 }, (_, index) => index + 1);

  cards = [
    { id: 1, title: '20 litters Jar', image: '../../../assets/images/Products/20-litter.jpeg',value:"12"},
    { id: 2, title: '10 litters Jar',  image: '../../../assets/images/Products/10-litters.webp' },
    { id: 3, title: '5 litters Jar',  image: '../../../assets/images/Products/5-litters.png'},
    { id: 4, title: '2 litters',  image: '../../../assets/images/Products/2-litter bisleri.webp' },
    { id: 5, title: '1 litter',  image: '../../../assets/images/Products/1-litter-1.png' },
    { id: 6, title: '600 Ml',  image: '../../../assets/images/Products/500-ml.jpg' },
    { id: 7, title: '500 Ml',  image: '../../../assets/images/Products/500-ml.jpg' },
    { id: 8, title: '300 Ml', image: '../../../assets/images/Products/300-ml.jpg' },
    // { id: 9, title: 'Card 3', content: 'Content for Card 3', image: 'path/to/image3.jpg' },

    // Add more cards as needed
  ];

}
