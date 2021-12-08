import { Component, Input } from '@angular/core';
import { Hand } from '../../models/hand';
import { GameType } from '../../models/game-type';

@Component({
  selector: 'app-hand-circles-container',
  templateUrl: './hand-circles-container.component.html',
  styleUrls: [ './hand-circles-container.component.scss' ]
})
export class HandCirclesContainerComponent {
  @Input() public gameType = GameType.Basic;

  public handEnum = Hand;
  public gameTypeEnum = GameType;

  public handClicked(hand: Hand): void {

  }

}
