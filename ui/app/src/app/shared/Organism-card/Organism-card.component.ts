import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Organism-card.component.html',
  styleUrls: ['./Organism-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Organism-card]': 'true'
  }
})

export class OrganismCardComponent {


}