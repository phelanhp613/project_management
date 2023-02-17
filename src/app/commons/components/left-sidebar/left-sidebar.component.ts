import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor() { }
  logo: string = '';
  menu: any = [];

  ngOnInit(): void {
    this.menu = [
      { url: '/project-management', label: 'Project Management' },
    ];
  }

}
