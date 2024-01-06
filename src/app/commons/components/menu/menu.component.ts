import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

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
  @Input() liClass: any = 'd-inline-block';
  @Input() scrollTop: any;
  @Input() isMobile: any;

  ngOnInit(): void {}

  voidFn() {
    return true;
  }
}
