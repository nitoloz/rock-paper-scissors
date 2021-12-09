import { AppState, RootState } from '../reducers';
import { createSelector } from '@ngrx/store';

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
