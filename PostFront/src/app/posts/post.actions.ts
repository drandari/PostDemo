import { createAction, props } from '@ngrx/store';

export const Create = createAction(
  '[POST] Create Post',
  props<{ nombre: string, descripcion: string }>()
);

export const Delete = createAction(
  '[POST] Delete Post',
  props<{ id: number }>()
);