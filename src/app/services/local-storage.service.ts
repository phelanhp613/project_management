import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}
  public TOKEN_KEY = 'api-token';
  public USER_KEY = 'auth-user';
  public LOGGED_IN = 'is-logged-in';

  public saveToken(token: string): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.LOGGED_IN, '1');
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  public removeToken(): string | void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.LOGGED_IN);
  }
  public saveUser(user: any): void {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public storeKeyValue(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getValueByKey(key: string) {
    return localStorage.getItem(key);
  }
}
