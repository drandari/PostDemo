import { createAction, props } from '@ngrx/store';
import { Post } from './models/post.model';

export const Create = createAction(
  '[POST] Create Post',
  props<{ post : Post }>()
);

export const Delete = createAction(
  '[POST] Delete Post',
  props<{ id: number }>()
);

export const List = createAction(
  '[POST] List Posts', props<{posts: Post[]}>()
);
