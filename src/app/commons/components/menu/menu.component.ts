import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Input() navClass: string | undefined;
  @Input() menu: any;
  @Input() linkClass: any;
  @Input() scrollTop: any;
  @Input() isMobile: any;
  ngOnInit(): void {}
}
