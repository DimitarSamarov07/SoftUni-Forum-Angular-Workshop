import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {UserService} from "./core/user.service";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {PostModule} from "./post/post.module";
import {ThemeModule} from "./theme/theme.module";
import {UserModule} from "./user/user.module";
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    PostModule,
    ThemeModule,
    UserModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
  ]
})
export class AppModule {
}
