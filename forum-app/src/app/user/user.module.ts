import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserService} from "../core/user.service";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from "./profile/profile.component";
import {UserRoutingModule} from "./user-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AuthGuard} from "../core/guards/auth.guard";


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: [
    UserService,
    AuthGuard
  ]
})
export class UserModule {
}
