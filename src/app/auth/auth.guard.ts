import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { GlobalService } from "../services/global.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  routing: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private globalService: GlobalService,
  ) {
    this.routing = globalService.routes;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;

    return this.checkLogin();
  }

  checkLogin(): true | UrlTree {
    if(this.authService.isLoggedIn) {
      return true;
    }
    return this.router.parseUrl(this.routing.signIn);
  }
}
