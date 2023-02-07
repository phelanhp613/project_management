import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ProjectManagementListingComponent } from "./project-management/project-management-listing/project-management-listing.component";
import { HomeComponent } from "./home/home.component";
import { ProjectManagementDetailComponent } from "./project-management/project-management-detail/project-management-detail.component";
import { ProjectManagementComponent } from "./project-management/project-management.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
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
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
