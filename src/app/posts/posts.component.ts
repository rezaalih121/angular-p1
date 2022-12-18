import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts ?: Observable<PostInterface[]>;
  constructor(private service: PostsService){}

  ngOnInit(): void{
    this.posts = this.service.getPosts();
  }

}
