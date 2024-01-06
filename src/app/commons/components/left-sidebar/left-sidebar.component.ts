import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { GlobalService } from "../../../services/global.service";
import { LocalStorageService } from "../../../services/local-storage.service";

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  logo: string = '';
  menu: any = [];
  paths: any = this.globalService.routes;
  isLoggedIn: boolean = this.authService.isLoggedIn;
  show: any = false;

  constructor(
    public authService: AuthService,
    private globalService: GlobalService,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    this.show = this.localStorage.getValueByKey('show_left_sidebar') === 'true';
    this.menu = [
      { url: this.paths.project.index, label: 'Project Management' },
    ];
  }

  switch(show: any) {
    this.show = !show;
    this.localStorage.storeKeyValue('show_left_sidebar', this.show);
  }
}
