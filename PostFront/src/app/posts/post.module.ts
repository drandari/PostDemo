import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { PostAddComponent } from './post-add/post-add.component';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostPageComponent } from './post-page/post-page.component';
import { FilterPipe } from './filter.pipe';
import { PostFilterComponent } from './post-filter/post-filter.component';



@NgModule({
  declarations: [
    PostAddComponent,
    PostFilterComponent,
    PostFooterComponent,
    PostItemComponent,
    PostListComponent,
    PostPageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PostPageComponent
  ]
})
export class PostModule { }
