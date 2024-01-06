import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import Utils from "../commons/utils";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  api: any = Utils.getAPI();

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService,
  ) { }

  getList(params: any = {}, page: any = 1) {
    params = {...{user_id: this.localStorage.getUser().id}, ...params}
    const data = {
      page: page,
      limit: 20,
      filters: params
    }
    const path = this.api.url + this.api.path.project.listing;
    return this.httpClient.post(path, data).pipe();
  }

  postCreate(data: any) {
    const path = this.api.url + this.api.path.project.crud;
    return this.httpClient.post(path, data).pipe();
  }

  putUpdate(id: any, data: any) {
    const path = this.api.url + this.api.path.project.crud + `/${id}`;
    return this.httpClient.put(path, data).pipe();
  }

  getDetail(id: any) {
    const path = this.api.url + this.api.path.project.crud + `/${id}`;
    return this.httpClient.get(path).pipe(map((response: any) => {
      if(response.status) {
        return response.data;
      }

      return [];
    }));
  }

  delete(id: any) {
    const path = this.api.url + this.api.path.project.crud + '/' + id;
    return this.httpClient.delete(path);
  }

  addCollaborator(data: any) {
    const path = this.api.url + this.api.path.project.collaborator.add;
    return this.httpClient.post(path, data).pipe();
  }

  removeCollaborator(data: any) {
    const path = this.api.url + this.api.path.project.collaborator.remove;
    return this.httpClient.post(path, data).pipe();
  }
}
