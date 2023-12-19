import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent {

  count: number = 1;
  cost: number = 80;
  offer: number = 60;

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

}
