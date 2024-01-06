import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  routes = {
    home: "/",
    dashboard: "/dashboard",
    signIn: "/sign-in",
    signUp: "/sign-up",
    project: {
      index: "/projects",
      detail: "/projects/detail/",
      create: "/projects/create/",
      update: "/projects/update/",
      updateWorkRoute: "/projects/update/work-route/",
    },
    profile: {
      info: "/profile/info"
    },
    pageNotFound: '/404.html'
  };

  lang = environment.lang;
}
