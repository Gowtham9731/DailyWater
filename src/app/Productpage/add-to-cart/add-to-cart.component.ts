import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnChanges {


  
  @Input()title: any;
  @Input()image: any;
  @Input()offer: any;
  @Input()price: any;

  ngOnInit():void{
    // console.log(this.patienttype);
  }
  
  selectedCard: { title: any; image: any; offer: any; price: any; } | undefined;
  count: any;
  cost: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // Access the selected card details when inputs change
    if (changes['title'] || changes['image'] || changes['offer'] || changes['price']) {
      this.selectedCard = {
        title: this.title,
        image: this.image,
        offer: this.offer,
        price: this.price,
      };
      console.log('Selected Card:', this.selectedCard);

      this.selectedCard=this.card;
      console.log('Selected Card:',this.card);

    }
  }

  // @Input() title: any;
  // @Input() image: any;
  // @Input() offer: any;
  // @Input() price: any;

  // count: number = 1;
  // cost: number = 80;
  // offer: number = 60;
  // protitle: string = '';
  // imgSrc: string = '';
  // image: any;
  // title: any;
  // offer: any;
  // price: any;
  // cost: any;
  // selectedCard: any;
  card: any;
  // data: any;
  // dataToSend: any;



  // constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) {

  //   this.selectedCard = this.apiservice.getSelectedCard();
  // }
  
  // ngOnInit(): void {
  //   // this.apiservice.geturl('https://retoolapi.dev/AZRr51/shopping').subscribe(
  //   //   (data: any) => {
  //   //     console.log(data);
  //   //     if (data.length > 0) {
  //   //       this.image = data[1].image;
  //   //       this.title = data[1].title;
  //   //       this.offer = data[1].title;
  //   //       this.price = data[1].price;
  //   //     }

  //   //   }

  //   // )
  // }




  onincrement() {
    this.count++;
    this.cost = this.count * this.price;
    this.offer = this.count * this.offer;
  }

  ondecrement() {
    if (this.count > 1) {
      this.count--;
      this.cost = this.count * this.price;
      this.offer = this.count * this.offer;
    }
  }
  buy() {
    let payment = {
      image: this.image,
      title: this.title,
      offer: this.offer,
      count: this.count,
      price: this.price
    }
    // let delData = {
    //   title: this.title,
    //   image: this.image,
    //   offer: this.offer,
    //   price: this.price
    // };
    let delData: {
      title: 'any';
      image: 'any';
      offer: 'any';
      price: 'any';
    };

    // this.apiservice.postApiData('https://retoolapi.dev/JqFoOK/addtoCart', payment).subscribe(
    //   (response) => {
    //     console.log(response);

    //     alert('Submitted Succesfully...');

        // this.apiservice.deleteApiData('https://retoolapi.dev/AZRr51/shopping', delData).subscribe(
        //   ()=>{
        //     alert("Delete Succesfully");
        //   }
        // )


        // Try Method ...

        // let apiUrl='https://retoolapi.dev/AZRr51/shopping';
        // this.httpClient.request('delete', apiUrl, { body: delData }).subscribe(
        //   (response) => {
        //     console.log(response);
        //     alert("Delete Succesfully");
        //     // Handle the response accordingly
        //   },
        //   (error) => {
        //     console.error(error);
        //     // Handle errors
        //   }
        // );
    //   }
    // );
  }
  // selectedCard: any;

  // constructor(private cardService: CardService) {
  // this.selectedCard = this.cardService.getSelectedCard();
  // }
}
