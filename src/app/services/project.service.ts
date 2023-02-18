import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { TokenStorageService } from "./token-storage.service";
import { map } from "rxjs";
import { UserModel } from "../commons/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  api: any = environment.api

  constructor(
    private httpClient: HttpClient,
    private tokenStorage: TokenStorageService,
  ) { }

  getList(params: any, page: any = 1) {
    const data = {
      page: page,
      limit: 20,
      filters: params
    }
    const path = this.api.url + this.api.path.project.listing;
    return this.httpClient.post(path, data).pipe();
  }

  getDetail(id: any) {
    const path = this.api.url + this.api.path.project.listing;
    return this.httpClient.post(path, {filters: {ids: [id]}}).pipe(map((response: any) => {
      if(response.status) {
        return response.data.data[0];
      }

      return [];
    }));
  }

}
