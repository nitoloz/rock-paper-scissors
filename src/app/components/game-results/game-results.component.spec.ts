import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameResultsComponent } from './game-results.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../ngrx/reducers/app.reducer';
import { ResultTextPipe } from './result-text.pipe';
import { playAgain } from '../../ngrx/actions/app.actions';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('GameResultsComponent', () => {
  let component: GameResultsComponent;
  let fixture: ComponentFixture<GameResultsComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [ GameResultsComponent, ResultTextPipe ],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(GameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit playAgain action on play again button click', () => {
    spyOn(store, 'dispatch');
    component.playAgain();
    expect(store.dispatch).toHaveBeenCalledWith(playAgain());
  });
});
