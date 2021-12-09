import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../ngrx/reducers';
import { changeGameType, resetScore } from '../../ngrx/actions/app.actions';
import { selectGameType } from '../../ngrx/selectors/app.selectors';
import { map, Observable, of } from 'rxjs';
import { GameType } from '../../models/game-type';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: [ './buttons-container.component.scss' ]
})
export class ButtonsContainerComponent implements OnInit {

  public gameModeLabel$: Observable<string>;

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.gameModeLabel$ = this.store.pipe(
      select(selectGameType),
      map((gameType) => {
        return gameType === GameType.Basic ? 'advanced' : 'basic';
      }));
  }

  public changeGameType(): void {
    this.store.dispatch(changeGameType());
  }

  public resetScore(): void {
    this.store.dispatch(resetScore());
  }
}
