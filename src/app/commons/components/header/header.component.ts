import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo: string = '';
  menu: any = [];
  menuMobile: any = [];

  constructor() {}

  public ngOnInit(): void {
    this.menu = [
      { url: 'project-management', label: 'lgMenu.lgProjectManagement' },
    ];
    this.menuMobile = [
      { url: 'project-management', label: 'lgMenu.lgProjectManagement' },
    ];
  }
}
