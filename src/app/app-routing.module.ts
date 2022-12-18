import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'' , component: MainComponent},
  {path:'home' , component: HomeComponent},
  {path:'contact' , component: ContactComponent},
  {path:'about' , component: AboutComponent},
  {path:'posts' , component: PostsComponent},
  {path:'gallery' , component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
