import { createReducer, on } from '@ngrx/store';
import { Post } from './models/post.model';
import { Create, Delete } from './post.actions';

export const initialState: Post[] = [
  new Post('Vencer a Thanos', 'post1'),
  new Post('Comprar el traje de Ironman', 'post2'),
  new Post('Robar escudo del Capitán América', 'post3')
];

// tslint:disable-next-line: variable-name
const _create = createReducer(initialState,
  on(Create, (state, { nombre, descripcion }) => [...state, new Post(nombre, descripcion)]),

  on(Delete, (state, { id }) => state.filter(post => post.id !== id)),

);

// tslint:disable-next-line: typedef
export function postReducer(state, action) {
  return _create(state, action);
}
