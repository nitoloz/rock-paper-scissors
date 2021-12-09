import { GameType } from '../../models/game-type';
import { createReducer, on } from '@ngrx/store';
import { changeGameType, resetScore, toggleRulesPopup } from '../actions/app.actions';
import { Hand } from '../../models/hand';

export interface SelectedHands {
  playerOne: Hand;
  playerTwo: Hand;
}

export interface AppState {
  gameType: GameType;
  score: number;
  showRules: boolean;
  selectedHands: SelectedHands;
}

const initialState = {
  gameType: GameType.Basic,
  score: 0,
  showRules: false,
  selectedHands: {
    playerOne: null,
    playerTwo: null,
  }
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
