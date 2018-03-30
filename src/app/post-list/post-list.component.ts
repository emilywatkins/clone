import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() childPostList: Post[];
  @Output() clickedUp = new EventEmitter;
  @Output() downvote = new EventEmitter;

  upvoteButtonClicked(postToUpvote: Post) {
    this.clickedUp.emit(postToUpvote);
  }

  constructor() { }

  ngOnInit() {
  }

}
