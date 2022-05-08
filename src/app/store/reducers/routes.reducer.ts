import { createReducer, on } from '@ngrx/store';
import { addRoute } from '../actions/routes.actions';

export const initialState: ReadonlyArray<Object> = [];

export const routesReducer = createReducer(
  initialState,
  on(addRoute, (state, { obj }) => {
    // if (state.indexOf(bookId) > -1) return state;

    return [...state, obj];
  })
);
