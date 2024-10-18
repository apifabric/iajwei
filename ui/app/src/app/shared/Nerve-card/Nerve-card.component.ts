import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Nerve-card.component.html',
  styleUrls: ['./Nerve-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Nerve-card]': 'true'
  }
})

export class NerveCardComponent {


}