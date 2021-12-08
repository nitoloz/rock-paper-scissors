import { Component, Input } from '@angular/core';
import { Hand } from '../../models/hand';
import { GameType } from '../../models/game-type';
import { select, State } from '@ngrx/store';
import { RootState } from '../../ngrx/reducers';
import { selectGameType } from '../../ngrx/selectors/app.selectors';

@Component({
  selector: 'app-hand-circles-container',
  templateUrl: './hand-circles-container.component.html',
  styleUrls: [ './hand-circles-container.component.scss' ]
})
export class HandCirclesContainerComponent {
  public handEnum = Hand;
  public gameTypeEnum = GameType;

  public gameType$ = this.state.pipe(select(selectGameType));

  constructor(private state: State<RootState>) {
  }

  public handClicked(hand: Hand): void {

  }

}
