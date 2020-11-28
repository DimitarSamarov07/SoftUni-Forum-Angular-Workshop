import {ThemeListComponent} from "./theme-list/theme-list.component";
import {ThemeListItemComponent} from "./theme-list-item/theme-list-item.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {PostModule} from "../post/post.module";
import {ThemeService} from "./theme.service";
import {NgModule} from "@angular/core";
import {NewThemeComponent} from './new-theme/new-theme.component';
import {ThemeRouterModule} from "./theme-routing.module";
import {DetailComponent} from './detail/detail.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    NewThemeComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRouterModule,
    PostModule,
    CoreModule
  ],
  providers: [
    ThemeService,
    CommonModule,
    SharedModule,
    PostModule,
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
  ],
})

export class ThemeModule {
}
