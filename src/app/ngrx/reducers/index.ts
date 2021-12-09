import { ActionReducerMap } from '@ngrx/store';
import { appReducer, AppState } from './app.reducer';

export interface RootState {
  app: AppState;
}

export const reducers: ActionReducerMap<RootState> = {
  app: appReducer
};
