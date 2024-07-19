import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Post } from '../models/post.model';

import * as actions from '../post.actions';

@Component({
  selector: '[app-post-item]',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompleted: FormControl;
  txtInput: FormControl;

  editing = false;

  // initialState: Post[] = [];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
   

  }


  delete(): void {
    this.store.dispatch(actions.Delete({ id: this.post.id }));
  }


}
