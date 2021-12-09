import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectLeftPlayerHand, selectRightPlayerHand, selectWinner } from '../../ngrx/selectors/app.selectors';
import { RootState } from '../../ngrx/reducers';
import { Observable } from 'rxjs';
import { Hand } from '../../models/hand';
import { CircleSize } from '../../models/circle-size';
import { playAgain } from '../../ngrx/actions/app.actions';
import { Winner } from '../../models/winner';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: [ './game-results.component.scss' ]
})
export class GameResultsComponent {

  public handEnum = Hand;
  public circleSizeEnum = CircleSize;

  public leftPlayerHand$: Observable<Hand> = this.store.pipe(select(selectLeftPlayerHand));
  public rightPlayerHand$: Observable<Hand> = this.store.pipe(select(selectRightPlayerHand));
  public winner$: Observable<Winner> = this.store.pipe(select(selectWinner));

  constructor(private store: Store<RootState>) {
  }

  playAgain(): void {
    this.store.dispatch(playAgain());
  }

}
