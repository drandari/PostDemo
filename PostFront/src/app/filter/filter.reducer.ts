import { createReducer, on } from '@ngrx/store';
import { setFilter } from './filter.actions';

export const initialState: string = '';

// tslint:disable-next-line: variable-name
const _filterReducer = createReducer(initialState,
  on(setFilter, (state, { filter }) => filter)
);

// tslint:disable-next-line: typedef
export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
