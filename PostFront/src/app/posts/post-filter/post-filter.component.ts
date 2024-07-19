import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-post-filter',
  templateUrl: './post-filter.component.html',
  styleUrls: ['./post-filter.component.scss']
})
export class PostFilterComponent implements OnInit {
  txtInputFiltroNombre: FormControl;

  constructor(
    private store: Store<AppState>
  ) {
    this.txtInputFiltroNombre = new FormControl('', Validators.required);
    
  }

  ngOnInit(): void {
  }

   filterPost(): void {

    let filter = this.txtInputFiltroNombre.value;
    this.store.dispatch(actions.setFilter({ filter }));
  }

}
