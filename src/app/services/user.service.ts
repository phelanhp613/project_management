import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import Utils from "../commons/utils";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: any = Utils.getAPI();

  constructor(
    private httpClient: HttpClient
  ) { }

  update(id: any, data: {}) {
    const path = this.api.url + this.api.path.user.crud + '/' + id;
    return this.httpClient.put(path, data).pipe();
  }
}
