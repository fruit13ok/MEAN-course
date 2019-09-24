// import { Component, Input } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  // @Input() posts = [];
  // this is typescript type assertion to said this is array of type Post, now has type check
  // @Input() posts: Post[] = [];
  posts: Post[] = [];
  private postsSub: Subscription;
  // this is shorthand, use 'public' will auto create local property postsService, and assign postsService service to it,
  // constructor(public postsService: PostsService) {
  // this is original way, clearer to understand,
  // a property of type PostsService
  postsService: PostsService;
  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }
  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
