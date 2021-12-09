import { createAction } from '@ngrx/store';

export const changeGameType = createAction('[RPS] Change game type');
export const resetScore = createAction('[RPS] Reset game score');
export const toggleRulesPopup = createAction('[RPS] Toggle rules popup');
