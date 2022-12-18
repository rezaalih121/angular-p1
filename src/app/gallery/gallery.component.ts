import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryInterface } from '../models/gallery.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  currentPage : number = 1;
  isLoadingPhotos :boolean = false;

  photos : GalleryInterface[] = [];
  constructor(private service: GalleryService){}
  
  ngOnInit(): void{
    this.service.getPhotos(this.currentPage).subscribe(data => {
      this.photos = data;
    });
    this.detectLazyLoading();
  }

  detectLazyLoading(){
    this.isLoadingPhotos = true;
    const observer = new IntersectionObserver(enteries => {
      enteries.forEach(entery => {
        if(entery.isIntersecting){
          this.service.getPhotos(this.currentPage).subscribe(data => {
            data.forEach(photo => {
              this.photos.push(photo);
            });
            this.currentPage++;
            this.isLoadingPhotos = false;
          })
          
        }
      })
    });
    observer.observe(document.querySelector('.lazy-loading-detector')!);
  }

}
