import { Component } from '@angular/core';
import { Hand } from '../../models/hand';
import { GameType } from '../../models/game-type';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../ngrx/reducers';
import { selectGameType } from '../../ngrx/selectors/app.selectors';
import { selectHand } from '../../ngrx/actions/app.actions';

@Component({
  selector: 'app-hand-circles-container',
  templateUrl: './hand-circles-container.component.html',
  styleUrls: [ './hand-circles-container.component.scss' ]
})
export class HandCirclesContainerComponent {
  public handEnum = Hand;
  public gameTypeEnum = GameType;

  public gameType$ = this.store.pipe(select(selectGameType));

  constructor(private store: Store<RootState>) {
  }

  public handClicked(hand: Hand): void {
    this.store.dispatch(selectHand({ hand }));
  }

}
