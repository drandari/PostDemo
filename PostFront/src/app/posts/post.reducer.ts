import { createReducer, on } from '@ngrx/store';
import { Post } from './models/post.model';
import { Create, Delete, List } from './post.actions';

export const initialState: Post[] = [];

// tslint:disable-next-line: variable-name
const _create = createReducer(initialState,
  on(Create, (state, { post }) => [...state, post]),

  on(Delete, (state, { id }) => state.filter(post => post.id !== id)),

  on(List, (state, { posts }) => state = posts)
);

// tslint:disable-next-line: typedef
export function postReducer(state, action) {
  return _create(state, action);
}
