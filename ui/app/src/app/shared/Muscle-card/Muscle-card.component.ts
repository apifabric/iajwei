import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Muscle-card.component.html',
  styleUrls: ['./Muscle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Muscle-card]': 'true'
  }
})

export class MuscleCardComponent {


}