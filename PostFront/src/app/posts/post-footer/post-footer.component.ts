import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-post-footer',
  templateUrl: './post-footer.component.html',
  styleUrls: ['./post-footer.component.scss']
})
export class PostFooterComponent implements OnInit {
//  currentFilter: actions.filtersValids = 'posts';
//  filters: actions.filtersValids[] = ['posts', 'completed', 'pending'];

  pendings = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store
      .subscribe(state => {
     //   this.currentFilter = state?.filter;
      //  this.pendings = state?.posts?.filter(post => !post.completed)?.length || 0;
      });
  }

  changeFilter(filter: string): void {
    this.store.dispatch(actions.setFilter({ filter }));
  }

}
