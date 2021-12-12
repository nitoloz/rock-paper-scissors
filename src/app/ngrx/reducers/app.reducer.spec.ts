import { appReducer, AppState, initialState } from './app.reducer';
import { GameType } from '../../models/game-type';
import { changeGameType, playAgain, resetScore, selectHand, toggleRulesPopup } from '../actions/app.actions';
import { Hand } from '../../models/hand';
import { Winner } from '../../models/winner';

describe('App reducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'Unknown',
      };
      const state = appReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('changeGameType action', () => {
    it('should change game type to another one', () => {
      const action = changeGameType();
      const state = appReducer(initialState, action);
      const newState: AppState = { ...initialState, gameType: GameType.Advanced };

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('resetScore action', () => {
    it('should reset score to 0', () => {
      const action = resetScore();
      const state = appReducer({ ...initialState, score: 1 }, action);
      const newState: AppState = { ...initialState, score: 0 };

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('toggleRulesPopup action', () => {
    it('should change visibility of rules pop-up', () => {
      const action = toggleRulesPopup();
      const state = appReducer({ ...initialState, showRules: true }, action);
      const newState: AppState = { ...initialState, showRules: false };

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('selectHand action', () => {
    it('should set users hand in state', () => {
      const action = selectHand({ hand: Hand.Spock });
      const state = appReducer({ ...initialState, selectedHands: null }, action);

      expect(state.selectedHands.left).toEqual(Hand.Spock);
    });
  });

  describe('playAgain action', () => {
    it('should reset selected hands', () => {
      const action = playAgain();
      const state = appReducer({
        ...initialState,
        selectedHands: { left: Hand.Spock, right: Hand.Lizard, winner: Winner.Left }
      }, action);
      const newState: AppState = { ...initialState, selectedHands: { left: null, right: null, winner: null } };

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });
});
