import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Subject } from "rxjs";
import { environment } from "../../environments/environment";
import { TokenStorageService } from "./token-storage.service";
import { UserModel } from "../commons/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api: any = environment.api
  auth: any = new Subject();

  constructor(
    private httpClient: HttpClient,
    private tokenStorage: TokenStorageService,
  ) { }

  register(data: any) {
    const path = this.api.url + this.api.path.auth.register;
    return this.httpClient.post(path, data).pipe(map((response: any) => response));
  }

  checkLoggedIn() {
    return this.auth.asObservable().pipe();
  }

  isLoggedIn() {
    const isLoggedIn = this.tokenStorage.getUser() != null && this.tokenStorage.getToken() != null;
    this.auth.next({isLoggedIn: isLoggedIn});
    return isLoggedIn;
  }

  login(data: any) {
    const path = this.api.url + this.api.path.auth.login;
    return this.httpClient.post(path, data).pipe(
      map((response: any) => {
        if(response.status===true) {
          this.tokenStorage.saveToken(response.data['api-token']);
          this.isLoggedIn();
        }
        return response;
      })
    );
  }

  logout() {
    const path = this.api.url + this.api.path.auth.logout;
    return this.httpClient.post(path, []).pipe(
      map((response: any) => {
        if(response.status===true) {
          this.tokenStorage.removeToken();
          this.isLoggedIn();
        }
        return response;
      })
    );
  }

  profile() {
    const path = this.api.url + this.api.path.user.crud;
    return this.httpClient.get(path).pipe(map((response: any) => {
      const user = new UserModel();
      user.id = response.data.id;
      user.address = response.data.address;
      user.email = response.data.email;
      user.name = response.data.name;
      user.phone = response.data.phone;

      this.tokenStorage.saveUser(user);
    }));
  }
}
