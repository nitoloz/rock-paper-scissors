import { RootState } from '../reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';

export const selectAppState = (state: RootState) => state.app;

export const selectGameType = createSelector(
  selectAppState,
  (state: AppState) => state.gameType
);

export const selectGameScore = createSelector(
  selectAppState,
  (state: AppState) => state.score
);

export const selectShowRulesPopup = createSelector(
  selectAppState,
  (state: AppState) => state.showRules
);

export const selectLeftPlayerHand = createSelector(
  selectAppState,
  (state: AppState) => state.selectedHands?.left
);

export const selectRightPlayerHand = createSelector(
  selectAppState,
  (state: AppState) => state.selectedHands?.right
);

export const selectWinner = createSelector(
  selectAppState,
  (state: AppState) => state.selectedHands?.winner
);
