import { GameType } from '../../models/game-type';
import { createReducer, on } from '@ngrx/store';
import { changeGameType, playAgain, resetScore, selectHand, toggleRulesPopup } from '../actions/app.actions';
import { getRandomHand, Hand } from '../../models/hand';
import { checkWinner, Winner } from '../../models/winner';

export interface SelectedHands {
  left: Hand;
  right: Hand;
  winner: Winner;
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
    left: null,
    right: null,
    winner: null,
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
  on(selectHand, (state, action) => {
    const randomHand = getRandomHand(state.gameType);
    const winner = checkWinner(action.hand, randomHand);
    const newScore = winner === Winner.Left ? state.score + 1 : winner === Winner.Right ? state.score - 1 : state.score;
    return {
      ...state,
      score: Math.max(newScore, 0),
      selectedHands: {
        left: action.hand,
        right: randomHand,
        winner: winner
      }
    };
  }),
  on(playAgain, (state) => ({
    ...state,
    selectedHands: initialState.selectedHands
  })),
);
