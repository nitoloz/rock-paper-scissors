import { Component } from '@angular/core';
import { Hand } from '../../models/hand';

@Component({
  selector: 'app-hand-circles-container',
  templateUrl: './hand-circles-container.component.html',
  styleUrls: [ './hand-circles-container.component.scss' ]
})
export class HandCirclesContainerComponent {

  public handEnum = Hand;

}
