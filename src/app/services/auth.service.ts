import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, map } from "rxjs";
import { LocalStorageService } from "./local-storage.service";
import { UserModel } from "../commons/models/user.model";
import Utils from "../commons/utils";
import { GlobalService } from "./global.service";
import { Router } from "@angular/router";
import { NotifyService } from "../commons/components/notify/notify.service";

class Authenticate {
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: any = Utils.getAPI();
  auth: any = new BehaviorSubject<UserModel | {}>({name: "User Name"});
  isLoggedIn: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router,
    public globalService: GlobalService,
    public notifyService: NotifyService,
  ) {
    this.isLoggedIn = this.localStorage.getUser() != null && this.localStorage.getToken() != null;
  }

  register(data: any) {
    const path = this.api.url + this.api.path.auth.register;
    return this.httpClient.post(path, data).pipe(map((response: any) => response));
  }

  login(data: any) {
    const path = this.api.url + this.api.path.auth.login;
    return this.httpClient.post(path, data).pipe(
      map((response: any) => {
        if(response.status === true) {
          this.localStorage.saveToken(response.data['api-token']);
          this.profile().subscribe();
          this.isLoggedIn = true;
        }
        return response;
      })
    );
  }

  logout() {
    const path = this.api.url + this.api.path.auth.logout;
    return this.httpClient.post(path, []).pipe(
      map((response: any) => {
        this.localStorage.removeToken();
        this.isLoggedIn = false;

        return response;
      })
    ).subscribe((response: any) => {
      this.notifyService.success('Logged Out Successfully');
      this.router.navigate([this.globalService.routes.signIn]);
    });
  }

  profile() {
    const path = this.api.url + this.api.path.user.crud;
    return this.httpClient.get(path).pipe(map((response: any) => {
      if(response.status) {
        const user = new UserModel();
        user.id = response.data.id;
        user.address = response.data.address;
        user.email = response.data.email;
        user.name = response.data.name;
        user.phone = response.data.phone;
        this.localStorage.saveUser(user);
        this.auth = user;
        return user;
      } else {
        this.logout();
        return false;
      }
    }));
  }
}
