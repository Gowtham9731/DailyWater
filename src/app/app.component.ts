import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DailyWater';

  selectedCard: any;

  onCardSelected(card: any) {
    this.selectedCard = card;
  }
}
