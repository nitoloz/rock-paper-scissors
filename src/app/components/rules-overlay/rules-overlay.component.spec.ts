import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesOverlayComponent } from './rules-overlay.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../ngrx/reducers/app.reducer';
import { toggleRulesPopup } from '../../ngrx/actions/app.actions';

describe('RulesOverlayComponent', () => {
  let component: RulesOverlayComponent;
  let fixture: ComponentFixture<RulesOverlayComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesOverlayComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(RulesOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit closePopup action on cross click', () => {
    spyOn(store, 'dispatch');
    component.closePopup();
    expect(store.dispatch).toHaveBeenCalledWith(toggleRulesPopup());
  });
});
