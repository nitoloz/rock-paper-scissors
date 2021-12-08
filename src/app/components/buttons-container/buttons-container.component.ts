import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { RootState } from '../../ngrx/reducers';
import { changeGameType } from '../../ngrx/actions/app.actions';

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: [ './buttons-container.component.scss' ]
})
export class ButtonsContainerComponent implements OnInit {

  constructor(private store: Store<RootState>) {
  }

  ngOnInit(): void {
  }

  public changeGameType(): void {
    this.store.dispatch(changeGameType());
  }
}
