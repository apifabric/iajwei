import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Cell-card.component.html',
  styleUrls: ['./Cell-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Cell-card]': 'true'
  }
})

export class CellCardComponent {


}