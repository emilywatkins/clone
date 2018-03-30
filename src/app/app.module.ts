import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

import { ListPostComponent } from './list-post/list-post.component';


@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
