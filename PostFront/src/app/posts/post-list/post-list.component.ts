import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  filterCurrent: string;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    // this.store.select('posts')
    //   .subscribe(posts => this.posts = posts);
    this.store
      .subscribe(({ posts, filter }) => {
        this.posts = posts;
        this.filterCurrent = filter;
      })
  }

}
