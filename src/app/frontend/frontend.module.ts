import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from "./frontend-routing.module";
import { HomeComponent } from "./home/home.component";
import { CommonsModule } from "../commons/commons.module";
import { RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ProjectManagementComponent } from "./project-management/project-management.component";
import { ProjectManagementListingComponent } from "./project-management/project-management-listing/project-management-listing.component";
import { ProjectManagementDetailComponent } from "./project-management/project-management-detail/project-management-detail.component";



@NgModule({
  declarations: [
    HomeComponent,
    ProjectManagementComponent,
    ProjectManagementListingComponent,
    ProjectManagementDetailComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    RouterOutlet,
    TranslateModule,
    FrontendRoutingModule,
  ]
})
export class FrontendModule { }
