import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../user.service";

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isLoggedFromData = childRoute.data.isLogged;

    if (typeof isLoggedFromData === "boolean" && isLoggedFromData === this.userService.isLogged) return true;

    const url = this.router.url;
    this.router.navigateByUrl(url)
    return false;
  }

}
