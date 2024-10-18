import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BloodVessel-card.component.html',
  styleUrls: ['./BloodVessel-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BloodVessel-card]': 'true'
  }
})

export class BloodVesselCardComponent {


}