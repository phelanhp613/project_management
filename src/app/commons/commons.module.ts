import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineTabComponent } from './components/timeline-tab/timeline-tab.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';



@NgModule({
  declarations: [
    TimelineTabComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LeftSidebarComponent,
  ],
  exports: [
    TimelineTabComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    TranslateModule,
  ]
})
export class CommonsModule { }
