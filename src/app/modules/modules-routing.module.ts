import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectManagementComponent } from "./project-management/project-management.component";
import { ProjectManagementListingComponent } from "./project-management/project-management-listing/project-management-listing.component";
import { ProjectManagementDetailComponent } from "./project-management/project-management-detail/project-management-detail.component";
import { AuthGuard } from "../auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'project-management',
    component: ProjectManagementComponent,
    children: [
      {
        path: '',
        component: ProjectManagementListingComponent,
      },
      {
        path: 'listing',
        component: ProjectManagementListingComponent,
      },
      {
        path: 'detail/:id',
        component: ProjectManagementDetailComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
