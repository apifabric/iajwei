import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './OrganSystem-card.component.html',
  styleUrls: ['./OrganSystem-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.OrganSystem-card]': 'true'
  }
})

export class OrganSystemCardComponent {


}