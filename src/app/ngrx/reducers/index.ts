import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { GameType } from '../../models/game-type';
import { changeGameType } from '../actions/app.actions';

export interface RootState {
  app: AppState;
}

export interface AppState {
  gameType: GameType;
}

const initialState = {
  gameType: GameType.Basic
};

export const appReducer = createReducer(
  initialState,
  on(changeGameType, (state, { gameType }) => ({ ...state, gameType })),
);

export const reducers: ActionReducerMap<RootState> = {
  app: appReducer
};
