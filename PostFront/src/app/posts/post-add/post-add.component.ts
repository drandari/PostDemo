import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../post.actions';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  txtInputNombre: FormControl;
  txtInputDescripcion: FormControl;

  constructor(
    private store: Store<AppState>,
    private postService: PostService
  ) {
    this.txtInputNombre = new FormControl('', Validators.required);
    this.txtInputDescripcion = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  } 

  addPost(): void {
    if (this.txtInputNombre.invalid || this.txtInputDescripcion.invalid) { return; }
    
    this.postService.add({ nombre: this.txtInputNombre.value, descripcion: this.txtInputDescripcion.value }).subscribe(
      (post : Post ) => {        
        this.store.dispatch(actions.Create({post}));        
        this.txtInputNombre.reset();
        this.txtInputDescripcion.reset();
      },
      (error) => {
        console.error('Error al ingresar el post', error);
      }
    );
  }


}
