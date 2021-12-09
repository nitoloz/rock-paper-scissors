import { createAction, props } from '@ngrx/store';
import { Hand } from '../../models/hand';

export const changeGameType = createAction('[RPS] Change game type');
export const resetScore = createAction('[RPS] Reset game score');
export const toggleRulesPopup = createAction('[RPS] Toggle rules popup');
export const selectHand = createAction('[RPS] Select hand for player', props<{ hand: Hand }>());
export const playAgain = createAction('[RPS] Play again');
