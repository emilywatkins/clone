import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  masterPostList: Post[] = [
    new Post('Post1 Title', 'Post1 Body', 'Post1 image url'),
    new Post('Post2 Title', 'Post2 Body', 'Post2 image url')
  ];

}
