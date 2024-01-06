import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import Utils from "../commons/utils";

@Injectable({
  providedIn: 'root'
})
export class ProjectWorkRouteService {

  api: any = Utils.getAPI();

  constructor(
    private httpClient: HttpClient,
  ) { }

  getList(params: any = {}, page: any = 1, limit = 20) {
    const data = {
      page: page,
      limit: limit,
      order_type: "ASC",
      filters: params
    }
    const path = this.api.url + this.api.path.project.workRoute.listing;
    return this.httpClient.post(path, data).pipe(map((r: any) => r.data ?? []));
  }

  postCreate(data: any) {
    const path = this.api.url + this.api.path.project.workRoute.crud;
    return this.httpClient.post(path, data).pipe();
  }

  putUpdate(id: any, data: any) {
    const path = this.api.url + this.api.path.project.workRoute.crud + `/${id}`;
    return this.httpClient.put(path, data).pipe();
  }

  getDetail(id: any) {
    const path = this.api.url + this.api.path.project.workRoute.crud + `/${id}`;
    return this.httpClient.get(path).pipe(map((response: any) => {
      if(response.status) {
        return response.data;
      }

      return [];
    }));
  }

  delete(id: any) {
    const path = this.api.url + this.api.path.project.workRoute.crud + '/' + id;
    return this.httpClient.delete(path);
  }
}
