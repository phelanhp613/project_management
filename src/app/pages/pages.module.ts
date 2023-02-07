import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { CommonsModule } from "../commons/commons.module";
import { ProjectManagementListingComponent } from './project-management/project-management-listing/project-management-listing.component';
import { ProjectManagementDetailComponent } from './project-management/project-management-detail/project-management-detail.component';
import { RouterOutlet } from "@angular/router";
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectManagementComponent,
    ProjectManagementListingComponent,
    ProjectManagementDetailComponent
  ],
  imports: [
    CommonModule,
    CommonsModule,
    RouterOutlet,
    PagesRoutingModule
  ]
})
export class PagesModule { }
