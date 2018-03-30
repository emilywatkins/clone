import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';


@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    PostListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
