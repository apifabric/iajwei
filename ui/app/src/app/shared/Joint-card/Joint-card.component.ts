import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Joint-card.component.html',
  styleUrls: ['./Joint-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Joint-card]': 'true'
  }
})

export class JointCardComponent {


}