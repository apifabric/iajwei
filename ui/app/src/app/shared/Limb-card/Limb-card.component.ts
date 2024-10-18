import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Limb-card.component.html',
  styleUrls: ['./Limb-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Limb-card]': 'true'
  }
})

export class LimbCardComponent {


}