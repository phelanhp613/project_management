import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineTabComponent } from './components/timeline-tab/timeline-tab.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    TimelineTabComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  exports: [
    TimelineTabComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    TranslateModule,
  ]
})
export class CommonsModule { }
