import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  selectIsLeftWinner,
  selectIsRightWinner,
  selectLeftPlayerHand,
  selectRightPlayerHand,
  selectWinner
} from '../../ngrx/selectors/app.selectors';
import { RootState } from '../../ngrx/reducers';
import { Observable } from 'rxjs';
import { Hand } from '../../models/hand';
import { CircleSize } from '../../models/circle-size';
import { playAgain } from '../../ngrx/actions/app.actions';
import { Winner } from '../../models/winner';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: [ './game-results.component.scss' ],
  animations: [
    trigger('appearance', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-in', style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class GameResultsComponent {

  public handEnum = Hand;
  public circleSizeEnum = CircleSize;

  public leftPlayerHand$: Observable<Hand> = this.store.pipe(select(selectLeftPlayerHand));
  public rightPlayerHand$: Observable<Hand> = this.store.pipe(select(selectRightPlayerHand));
  public winner$: Observable<Winner> = this.store.pipe(select(selectWinner));
  public isLeftWinner$: Observable<boolean> = this.store.pipe(select(selectIsLeftWinner));
  public isRightWinner$: Observable<boolean> = this.store.pipe(select(selectIsRightWinner));

  constructor(private store: Store<RootState>) {
  }

  playAgain(): void {
    this.store.dispatch(playAgain());
  }

}
