import { createAction, props } from '@ngrx/store';

export const setFilter = createAction(
  '[Filter] set Filter',
  props<{ filter: string }>()
);

