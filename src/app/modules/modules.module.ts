import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesRoutingModule } from "./modules-routing.module";
import { CommonsModule } from "../commons/commons.module";
import { RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ProjectManagementComponent } from "./project-management/project-management.component";
import { ProjectManagementListingComponent } from "./project-management/project-management-listing/project-management-listing.component";
import { ProjectManagementDetailComponent } from "./project-management/project-management-detail/project-management-detail.component";
import { ProjectWorkRouteComponent } from "./project-management/project-management-detail/project-work-route/project-work-route.component";
import { ProjectCollaboratorListingComponent } from './project-management/project-management-detail/project-collaborator-listing/project-collaborator-listing.component';
import { ProjectManagementCreateComponent } from './project-management/project-management-create/project-management-create.component';
import { ProfilePageInfoComponent } from './profile-management/profile-page/profile-page-info/profile-page-info.component';
import { ProfileManagementComponent } from './profile-management/profile-management.component';
import { ProjectManagementUpdateComponent } from "./project-management/project-management-update/project-management-update.component";
import { ProjectWorkRouteUpdateComponent } from "./project-management/project-work-route-update/project-work-route-update.component";
import { ProjectWorkRouteSubjectComponent } from "./project-management/project-work-route-update/project-work-route-subject/project-work-route-subject.component";
import { MaterialModule } from "../commons/modules/material.module";
import { ProjectWorkRouteWorkComponent } from './project-management/project-work-route-update/project-work-route-subject/project-work-route-work/project-work-route-work.component';

@NgModule({
  declarations: [
    ProjectManagementComponent,
    ProjectManagementListingComponent,
    ProjectManagementDetailComponent,
    ProjectWorkRouteComponent,
    ProjectCollaboratorListingComponent,
    ProjectManagementCreateComponent,
    ProfilePageInfoComponent,
    ProfileManagementComponent,
    ProjectManagementUpdateComponent,
    ProjectWorkRouteUpdateComponent,
    ProjectWorkRouteSubjectComponent,
    ProjectWorkRouteWorkComponent,
  ],
  imports: [
    SweetAlert2Module,
    CommonModule,
    CommonsModule,
    RouterOutlet,
    TranslateModule,
    ModulesRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    SweetAlert2Module,
  ]
})
export class ModulesModule {}
