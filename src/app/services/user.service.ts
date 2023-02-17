import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { TokenStorageService } from "./token-storage.service";
import { map } from "rxjs";
import { UserModel } from "../commons/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: any = environment.api

  constructor(
    private httpClient: HttpClient,
    private tokenStorage: TokenStorageService,
  ) { }

}
