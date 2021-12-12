import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsContainerComponent } from './buttons-container.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../ngrx/reducers/app.reducer';
import { changeGameType, resetScore, toggleRulesPopup } from '../../ngrx/actions/app.actions';

describe('ButtonsContainerComponent', () => {
  let component: ButtonsContainerComponent;
  let fixture: ComponentFixture<ButtonsContainerComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsContainerComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsContainerComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changeGameType action on `basic` button click', () => {
    spyOn(store, 'dispatch');
    component.changeGameType();
    expect(store.dispatch).toHaveBeenCalledWith(changeGameType());
  });

  it('should emit resetScore action on `reset` button click', () => {
    spyOn(store, 'dispatch');
    component.resetScore();
    expect(store.dispatch).toHaveBeenCalledWith(resetScore());
  });

  it('should emit showRulesPopup action on `rules` button click', () => {
    spyOn(store, 'dispatch');
    component.showRulesPopup();
    expect(store.dispatch).toHaveBeenCalledWith(toggleRulesPopup());
  });
});
