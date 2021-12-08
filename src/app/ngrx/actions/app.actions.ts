import { createAction, props } from '@ngrx/store';
import { GameType } from '../../models/game-type';

export const changeGameType = createAction('[RPS] Change game type', props<{gameType: GameType}>());
