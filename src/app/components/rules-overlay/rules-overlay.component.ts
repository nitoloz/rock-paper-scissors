import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RootState } from '../../ngrx/reducers';
import { selectGameType } from '../../ngrx/selectors/app.selectors';
import { map, Observable } from 'rxjs';
import { GameType } from '../../models/game-type';
import { toggleRulesPopup } from '../../ngrx/actions/app.actions';

@Component({
  selector: 'app-rules-overlay',
  templateUrl: './rules-overlay.component.html',
  styleUrls: [ './rules-overlay.component.scss' ]
})
export class RulesOverlayComponent {

  @Output() public closed = new EventEmitter<void>();

  public imageUrl$: Observable<string> = this.store.pipe(select(selectGameType), map((gameType) => {
    return gameType === GameType.Basic ? `image-rules.svg` : `image-rules-bonus.svg`;
  }));

  constructor(private store: Store<RootState>) {
  }

  closePopup(): void {
    this.store.dispatch(toggleRulesPopup());
  }
}
