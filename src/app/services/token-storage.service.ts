import { Injectable } from '@angular/core';
const TOKEN_KEY = 'api-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }
  public removeToken(): string | void {
    localStorage.removeItem(TOKEN_KEY);
  }
  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
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
