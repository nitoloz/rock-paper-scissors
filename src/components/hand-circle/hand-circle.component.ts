import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hand } from '../../models/hand';

@Component({
  selector: 'app-hand-circle',
  templateUrl: './hand-circle.component.html',
  styleUrls: [ './hand-circle.component.scss' ]
})
export class HandCircleComponent {
  @Input() public hand: Hand = Hand.Rock;

  @Output() public handClicked = new EventEmitter<void>();

  public handEnum = Hand;
}
