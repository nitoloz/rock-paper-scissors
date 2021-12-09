import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GameType } from '../../models/game-type';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../ngrx/reducers';
import { Observable, Subscription } from 'rxjs';
import { selectGameScore, selectGameType } from '../../ngrx/selectors/app.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  public gameType = GameType.Basic;
  public gameTypeEnum = GameType;
  public score$: Observable<number> = this.store.pipe(select(selectGameScore));

  private subscription: Subscription;

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
    this.subscription = this.store.pipe(select(selectGameType)).subscribe((gameType) => {
      this.gameType = gameType;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
