import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Tissue-card.component.html',
  styleUrls: ['./Tissue-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Tissue-card]': 'true'
  }
})

export class TissueCardComponent {


}