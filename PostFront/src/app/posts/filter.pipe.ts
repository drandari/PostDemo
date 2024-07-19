import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './models/post.model';

@Pipe({
  name: 'filterPost'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], filter: string): Post[] {
    
    if (filter.length > 0) {
      return posts?.filter(post => post.nombre.toLowerCase().includes(filter.toLocaleLowerCase()));
    }

    return posts;
   
  }

}
