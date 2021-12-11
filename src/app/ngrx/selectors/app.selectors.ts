import { RootState } from '../reducers';
import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';
import { Winner } from '../../models/winner';

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

export const selectIsLeftWinner = createSelector(
  selectAppState,
  (state: AppState) => state.selectedHands?.winner === Winner.Left
);

export const selectIsRightWinner = createSelector(
  selectAppState,
  (state: AppState) => state.selectedHands?.winner === Winner.Right
);
