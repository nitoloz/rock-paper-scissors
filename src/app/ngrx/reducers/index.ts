import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { GameType } from '../../models/game-type';
import { changeGameType, resetScore, toggleRulesPopup } from '../actions/app.actions';

export interface RootState {
  app: AppState;
}

export interface AppState {
  gameType: GameType;
  score: number;
  showRules: boolean;
}

const initialState = {
  gameType: GameType.Basic,
  score: 0,
  showRules: false,
};

export const appReducer = createReducer(
  initialState,
  on(changeGameType, (state) => ({
    ...state,
    gameType: state.gameType === GameType.Basic ? GameType.Advanced : GameType.Basic
  })),
  on(resetScore, (state) => ({
    ...state,
    score: 0
  })),
  on(toggleRulesPopup, (state) => ({
    ...state,
    showRules: !state.showRules
  })),
);

export const reducers: ActionReducerMap<RootState> = {
  app: appReducer
};
