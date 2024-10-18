import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Organ-card.component.html',
  styleUrls: ['./Organ-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Organ-card]': 'true'
  }
})

export class OrganCardComponent {


}