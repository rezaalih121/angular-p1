import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryInterface } from '../models/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private api = `https://picsum.photos/v2/list?limit=12&page=`
  
  constructor(private http : HttpClient) { }

  getPhotos(page: number = 1 ) : Observable<GalleryInterface[]>{
    return this.http.get(this.api.concat(page.toString())) as Observable<GalleryInterface[]>;
  }
}
