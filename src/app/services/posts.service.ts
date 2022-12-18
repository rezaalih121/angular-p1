import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private api : string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}
   
   getPosts() : Observable<PostInterface[]>{
    return this.http.get(this.api) as Observable<PostInterface[]>;
   }
}
