
import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  // @Output() postCreated = new EventEmitter();
  // this is typescript type assertion to said this is type Post, now has type check
  @Output() postCreated = new EventEmitter<Post>();
  // newPost = 'No content';
  // onAddPost(postInput: HTMLTextAreaElement) {
  //   // console.dir list object properties
  //   // console.dir(postInput);
  //   // console.log(postInput);
  //   // this.newPost = 'The user\'s post';
  //   this.newPost = postInput.value;
  // }
  onAddPost() {
    // use ngModel two-way binding
    // this.newPost = this.enteredValue;
    // const post = { title: this.enteredTitle, content: this.enteredContent };
    // this is typescript type assertion to said this is type Post, now has type check
    const post: Post = { title: this.enteredTitle, content: this.enteredContent };
    this.postCreated.emit(post);
  }
}
