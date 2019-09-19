import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  // storedPosts = [];
  // this is typescript type assertion to said this is array of type Post, now has type check
  storedPosts: Post[] = [];
  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
