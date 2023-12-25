import { Component } from '@angular/core';



@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent {

  // cards = [
  //   { id: 1, product:'20 litters Jar',count:'130'},
  //   { id: 2, product: '10 litters Jar', count:'100' },
  //   { id: 3, product: '5 litters Jar',  count:'120'},
  //   { id: 4, product: '2 litters',  count:'300' },
  //   { id: 5, product: '1 litter', count:'200' },
  //   { id: 6, product: '600 Ml',  count:'500' },
  //   { id: 7, product: '500 Ml', count:'400' },
  //   { id: 8, product: '300 Ml', count:'300' },
  //   // { id: 9, title: 'Card 3', content: 'Content for Card 3', image: 'path/to/image3.jpg' },

  //   // Add more cards as needed
  // ];
// product: any;
// count: any;

users = [
  { SlNum: 1, Products: '20 Litters Jar', StockCounts: '210' },
  { SlNum: 2, Products: '10 Litters Jar', StockCounts: '200' },
  { SlNum: 3, Products: '5 Litters Jar', StockCounts: '300' },
  { SlNum: 4, Products: '2 Litters', StockCounts: '221' },
  { SlNum: 5, Products: '1 Litters', StockCounts: '310' },
  { SlNum: 6, Products: '600 Ml', StockCounts: '310' },
  { SlNum: 7, Products: '500 Ml', StockCounts: '401' },
  { SlNum: 8, Products: '300 Ml', StockCounts: '520' },
  // Add more user data as needed
];

// attenance=[SlNum: 1, Products: '20 Litters Jar', StockCounts: '210'];
 
}
