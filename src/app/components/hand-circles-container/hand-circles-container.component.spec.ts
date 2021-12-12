import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCirclesContainerComponent } from './hand-circles-container.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from '../../ngrx/reducers/app.reducer';
import { selectHand } from '../../ngrx/actions/app.actions';
import { Hand } from '../../models/hand';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HandCirclesContainerComponent', () => {
  let component: HandCirclesContainerComponent;
  let fixture: ComponentFixture<HandCirclesContainerComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [ HandCirclesContainerComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(HandCirclesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit handClicked action on hand selection', () => {
    spyOn(store, 'dispatch');
    component.handClicked(Hand.Lizard);
    expect(store.dispatch).toHaveBeenCalledWith(selectHand({ hand: Hand.Lizard }));
  });
});
