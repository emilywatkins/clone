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
  @Output() clickedDown = new EventEmitter;

  upvoteButtonClicked(postToUpvote: Post) {
    this.clickedUp.emit(postToUpvote);
  }

  downvoteButtonClicked(postToDownvote: Post) {
    this.clickedDown.emit(postToDownvote);
  }

  constructor() { }

  ngOnInit() {
  }

}
