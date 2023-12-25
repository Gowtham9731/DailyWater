import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-deliveryservice',
  templateUrl: './deliveryservice.component.html',
  styleUrls: ['./deliveryservice.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition('* => *', [
        query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('1s', keyframes([
            style({ transform: 'translateX(100%)', offset: 0 }),
            style({ transform: 'translateX(0)', offset: 1.0 }),
          ])),
        ]), { optional: true }),
      ]),
    ]),
  ],
})
export class DeliveryserviceComponent {

  // // images: string[] = ['', 'image2.jpg', 'image3.jpg'];

  // images=[
  //   { id: 1, title: '20 litters Jar', image: '../../../assets/images/Products/20-litter.jpeg', stock: "50" },
    
  // ]
  // currentIndex = 0;

  // next() {
  //   this.currentIndex = (this.currentIndex + 1) % this.images.length;
  // }

  // prev() {
  //   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  // }

  // images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  // config: SwiperOptions = {
  //   loop: true,
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // };

  images = [
    '../../../assets/images/delivery industries/air-lines-mineral-water-suppliers.jpg',
    '../../../assets/images/delivery industries/bpo-sectors-mineral-water-suppliers.jpg',
    '../../../assets/images/delivery industries/catering-mineral-water-suppliers.jpg',
    '../../../assets/images/delivery industries/g1-2.jpg',
    '../../../assets/images/delivery industries/g2-2-1.jpg',
    '../../../assets/images/delivery industries/g2-3.jpg',
    '../../../assets/images/delivery industries/it-sectors-mineral-water-suppliers.jpg',
    '../../../assets/images/delivery industries/logistics-mineral-water-suppliers.jpg',
    '../../../assets/images/delivery industries/residences-mineral-water-suppliers.jpg',
    '../../../assets/images/delivery industries/air-lines-mineral-water-suppliers.jpg',
    // ' ',
    // ... add more image paths
  ];

}
