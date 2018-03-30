import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() sendPost = new EventEmitter;

  submitForm(title: string, body: string, image: string) {
    let newPost: Post = new Post(title, body, image);
    this.sendPost.emit(newPost);
  }

  constructor() { }

  ngOnInit() {
  }

}
