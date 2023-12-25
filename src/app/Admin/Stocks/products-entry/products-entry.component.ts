import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products-entry',
  templateUrl: './products-entry.component.html',
  styleUrls: ['./products-entry.component.scss']
})
export class ProductsEntryComponent {

 constructor(private httpClient: HttpClient, private router: Router, private apiservice: ApiService) { }

  cards = [
    { id: 1, title: '20 litters Jar', image: '../../../assets/images/Products/20-litter.jpeg', stock: "50" },
    { id: 2, title: '10 litters Jar', image: '../../../assets/images/Products/10-litters.webp', stock: "100" },
    { id: 3, title: '5 litters Jar', image: '../../../assets/images/Products/5-litters.png', stock: "200" },
    { id: 4, title: '2 litters', image: '../../../assets/images/Products/2-litter-beily.webp', stock: "120" },
    { id: 5, title: '1 litter', image: '../../../assets/images/Products/1-liter-bisleri.jpg', stock: "302" },
    { id: 6, title: '600 Ml', image: '../../../assets/images/Products/500-ml.jpg', stock: "400" },
    { id: 7, title: '500 Ml', image: '../../../assets/images/Products/500-ml.jpg', stock: "340" },
    { id: 8, title: '300 Ml', image: '../../../assets/images/Products/300ml-1.jpg', stock: "543" },

    // Add more cards as needed
  ];
  inputValues: number[] = [];
  totalValues: number[] = [];
  title: any;
  stock: any;
  inputGrandTotal: any;
  grandTotal: any;
  image: any;

  add(index: number) {
    if (this.cards[index]?.stock !== undefined && this.inputValues[index] !== undefined ||'') {
      this.totalValues[index] = Number(this.cards[index].stock) +Number(this.inputValues[index]);
    } else {
      alert('Invalid card or input value.');
    }
  }
  getGrandTotal() {
    return this.totalValues.reduce((sum, value) => sum + (value || 0), 0);
  }
  getGrandinput() {
    return this.inputValues.reduce((sum, value) => sum + (value || 0), 0);
  }

  inputsentry() {

    let stocks = {
      title: this.title,
      image:this.image,
      stock:this.stock,
      inputValues:this.inputValues,
      totalValues:this.totalValues,
      inputGrandTotal:this.inputGrandTotal,
      grandTotal:this.grandTotal

    }
    // console.log(stocks);

    this.httpClient.post("https://retoolapi.dev/UbKkRw/stockEntry", stocks).subscribe(
    () => {
      alert("Entered Successfully...");
    },
    error => {
      alert("Encounterd a problem.Mannichooo... Plz try try again.");
    }
  
  );
  }
}