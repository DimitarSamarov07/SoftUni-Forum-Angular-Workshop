import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ThemeListComponent} from './theme-list/theme-list.component';
import {AsideComponent} from './aside/aside.component';
import {UserService} from "./user.service";
import {storageServiceProvider} from "./storage.service";
import {HttpClientModule} from "@angular/common/http";
import {ThemeListItemComponent} from './theme-list-item/theme-list-item.component';
import {ThemeService} from "./theme.service";
import {PostListComponent} from './post-list/post-list.component';
import {PostService} from "./post.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemeListComponent,
    AsideComponent,
    ThemeListItemComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    storageServiceProvider,
    HttpClientModule,
    ThemeService,
    PostService]
  ,
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule {
}
