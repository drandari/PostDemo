import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../post.actions';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})

export class PostPageComponent implements OnInit {


  completed = false;

  constructor(
    private store: Store<AppState>,
    private postService: PostService
  ) { }

  fetchPosts(): void {
    this.postService.getList().subscribe(
      (posts : Post[] ) => {
        this.store.dispatch(actions.List({posts}));        
      },
      (error) => {
        console.error('Error al obtener la lista de posts', error);
      }
    );
  }

  ngOnInit(): void {
      this.fetchPosts();
  }  
}
