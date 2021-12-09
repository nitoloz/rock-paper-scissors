import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hand } from '../../models/hand';
import { CircleSize } from '../../models/circle-size';

@Component({
  selector: 'app-hand-circle',
  templateUrl: './hand-circle.component.html',
  styleUrls: [ './hand-circle.component.scss' ]
})
export class HandCircleComponent {
  @Input() public hand: Hand = Hand.Rock;
  @Input() public size: CircleSize = CircleSize.Regular;

  @Output() public handClicked = new EventEmitter<void>();

  public handEnum = Hand;
  public circleSizeEnum = CircleSize;
}
