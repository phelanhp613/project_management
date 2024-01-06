import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { TimelineTabComponent } from './components/timeline-tab/timeline-tab.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { NotifyComponent } from './components/notify/notify.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TemplateLeftSiderBarComponent } from './components/templates/template-left-siderbar/template-left-siderbar.component';
import { ValidateMessageComponent } from './components/validate-message/validate-message.component';
import { MenuComponent } from "./components/menu/menu.component";
import { FormComponent } from './components/form/form.component';
import { AuthGroupComponent } from "./components/header/auth-group/auth-group.component";
import { InputComponent } from "./components/input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from "./modules/material.module";
import { SortElementsComponent } from './components/sort-elements/sort-elements.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { EmptyDataBlockComponent } from './components/empty-data-block/empty-data-block.component';
import { ProgressBarCircleComponent } from './components/progress-bar-circle/progress-bar-circle.component';
import { NgCircleProgressModule } from "ng-circle-progress";

@NgModule({
  declarations: [
    InputComponent,
    TimelineTabComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LeftSidebarComponent,
    AuthGroupComponent,
    NotifyComponent,
    PaginationComponent,
    TemplateLeftSiderBarComponent,
    ValidateMessageComponent,
    FormComponent,
    LoadingComponent,
    SortElementsComponent,
    ProgressBarComponent,
    EmptyDataBlockComponent,
    ProgressBarCircleComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    TranslateModule,
    RouterOutlet,
    ReactiveFormsModule,
    MaterialModule,
    NgCircleProgressModule.forRoot(),
  ],
  exports: [
    TimelineTabComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    NotifyComponent,
    PaginationComponent,
    TemplateLeftSiderBarComponent,
    ValidateMessageComponent,
    InputComponent,
    LoadingComponent,
    SortElementsComponent,
    ProgressBarComponent,
    EmptyDataBlockComponent,
    ProgressBarCircleComponent,
  ]
})
export class CommonsModule {}
