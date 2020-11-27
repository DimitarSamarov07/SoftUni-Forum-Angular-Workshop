import {NgModule} from "@angular/core";
import {PostListComponent} from "./post-list/post-list.component";
import {CommonModule} from "@angular/common";
import {PostService} from "./post.service";

@NgModule({
  declarations: [
    PostListComponent
  ],
  providers: [
    PostService
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PostListComponent
  ]
})

export class PostModule {
}
