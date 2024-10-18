import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Bone-card.component.html',
  styleUrls: ['./Bone-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Bone-card]': 'true'
  }
})

export class BoneCardComponent {


}