import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineTabComponent } from './components/timeline-tab/timeline-tab.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { AuthHeaderComponent } from './components/header/auth-header/auth-header.component';
import { NotifyComponent } from './components/notify/notify.component';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    TimelineTabComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LeftSidebarComponent,
    AuthHeaderComponent,
    NotifyComponent,
    PaginationComponent,
  ],
    exports: [
        TimelineTabComponent,
        HeaderComponent,
        FooterComponent,
        LeftSidebarComponent,
        NotifyComponent,
        PaginationComponent,
    ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    TranslateModule,
  ]
})
export class CommonsModule { }
