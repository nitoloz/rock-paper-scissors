import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hand } from '../../models/hand';
import { CircleSize } from '../../models/circle-size';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hand-circle',
  templateUrl: './hand-circle.component.html',
  styleUrls: [ './hand-circle.component.scss' ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-50%) rotate(270deg)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
    ])
  ]
})
export class HandCircleComponent {
  @Input() public hand: Hand = Hand.Rock;
  @Input() public size: CircleSize = CircleSize.Regular;
  @Input() public isWinner = false;

  @Output() public handClicked = new EventEmitter<void>();

  public handEnum = Hand;
  public circleSizeEnum = CircleSize;
}
