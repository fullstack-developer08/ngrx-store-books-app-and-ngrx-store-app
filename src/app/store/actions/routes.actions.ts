import { createAction, props } from '@ngrx/store';

export const addRoute = createAction(
  '[Route Info] Add Route',
  props<{ obj: Object }>()
);
