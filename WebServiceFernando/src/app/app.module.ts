import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NuevocomponenteComponent } from './nuevocomponente/nuevocomponente.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';
import { TabModule } from 'angular-tabs-component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    NuevocomponenteComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TabModule,
    Ng4LoadingSpinnerModule,
    NgProgressModule
  ],
  providers: [
    {provide: BrowserXhr,useClass:NgProgressBrowserXhr
       }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
