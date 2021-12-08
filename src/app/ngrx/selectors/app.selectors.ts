import { AppState, RootState } from '../reducers';
import { createSelector } from '@ngrx/store';

export const selectAppState = (state: RootState) => state.app;

export const selectGameType = createSelector(
  selectAppState,
  (state: AppState) => state.gameType
);
