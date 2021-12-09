import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootState } from './ngrx/reducers';
import { selectGameScore, selectGameType, selectShowRulesPopup, selectWinner } from './ngrx/selectors/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  public showRulesPopup$ = this.store.pipe(select(selectShowRulesPopup));
  public winner$ = this.store.pipe(select(selectWinner));

  constructor(private store: Store<RootState>) {
  }

}
