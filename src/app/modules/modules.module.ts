import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from "./modules-routing.module";
import { HomeComponent } from "./home/home.component";
import { CommonsModule } from "../commons/commons.module";
import { RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ProjectManagementComponent } from "./project-management/project-management.component";
import { ProjectManagementListingComponent } from "./project-management/project-management-listing/project-management-listing.component";
import { ProjectManagementDetailComponent } from "./project-management/project-management-detail/project-management-detail.component";
import { ProjectWorkRouteComponent } from "./project-management/project-management-detail/project-work-route/project-work-route.component";
import { ProjectCollaboratorListingComponent } from './project-management/project-management-detail/project-collaborator-listing/project-collaborator-listing.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectManagementComponent,
    ProjectManagementListingComponent,
    ProjectManagementDetailComponent,
    ProjectWorkRouteComponent,
    ProjectCollaboratorListingComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    RouterOutlet,
    TranslateModule,
    ModulesRoutingModule,
    SweetAlert2Module
  ]
})
export class ModulesModule { }
