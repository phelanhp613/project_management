import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { GlobalService } from "../../../services/global.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo: string = '/assets/images/personal-logo.png';
  menuAuth: any = [];
  menuUnAuth: any = [];
  routes: any = {};

  constructor(
    public authService: AuthService,
    private globalService: GlobalService
  ) {
    this.routes = this.globalService.routes;

    this.menuAuth = [
      { url: this.routes.project.index, label: 'Project Management' },
    ];
    this.menuUnAuth = [
      { url: this.routes.pageNotFound, label: '404' },
    ];
  }

  public ngOnInit(): void {
  }
}
