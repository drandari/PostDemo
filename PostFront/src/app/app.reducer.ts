import { ActionReducerMap } from '@ngrx/store';
import { filterReducer } from './filter/filter.reducer';
import { Post } from './posts/models/post.model';
import { postReducer } from './posts/post.reducer';

export interface AppState {
  posts: Post[];
  filter: string;
}

export const appReducers: ActionReducerMap<AppState> = {
  posts: postReducer,
  filter: filterReducer
};
