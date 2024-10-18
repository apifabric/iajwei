import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SenseOrgan-card.component.html',
  styleUrls: ['./SenseOrgan-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SenseOrgan-card]': 'true'
  }
})

export class SenseOrganCardComponent {


}