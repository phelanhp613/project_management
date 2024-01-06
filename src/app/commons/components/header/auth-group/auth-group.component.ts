import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { GlobalService } from "../../../../services/global.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth-group',
  templateUrl: './auth-group.component.html',
  styleUrls: ['./auth-group.component.scss']
})
export class AuthGroupComponent implements OnInit {
  routes: any;
  user: any;
  menu: any = {};

  constructor(
    public router: Router,
    public authService: AuthService,
    private globalService: GlobalService,
  ) {
    this.routes = globalService.routes;
    this.user = authService.auth.value;
    this.menu = [
      { url: this.routes.home, label: 'Home' },
      { url: this.routes.project.index, label: 'Project Management' },
      { url: this.routes.profile.info, label: 'Profile' },
      {
        url: '',
        label: 'Sign Out',
        callback: () => this.authService.logout()
      },
    ];
  }

  ngOnInit() {}

  ngAfterViewInit() {
  }

  toProfile() {
    this.router.navigate([this.routes.profile.info])
  }
}
