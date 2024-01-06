import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ProjectManagementComponent } from "./project-management/project-management.component";
import { ProjectManagementListingComponent } from "./project-management/project-management-listing/project-management-listing.component";
import { ProjectManagementDetailComponent } from "./project-management/project-management-detail/project-management-detail.component";
import { ProjectManagementCreateComponent } from "./project-management/project-management-create/project-management-create.component";
import { ProfileManagementComponent } from "./profile-management/profile-management.component";
import { ProfilePageInfoComponent } from "./profile-management/profile-page/profile-page-info/profile-page-info.component";
import { ProjectManagementUpdateComponent } from "./project-management/project-management-update/project-management-update.component";
import { ProjectWorkRouteUpdateComponent } from "./project-management/project-work-route-update/project-work-route-update.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: ProjectManagementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    component: ProjectManagementComponent,
    children: [
      {
        path: '',
        component: ProjectManagementListingComponent,
      },
      {
        path: 'detail/:id',
        component: ProjectManagementDetailComponent,
      },
      {
        path: 'update/:id',
        component: ProjectManagementUpdateComponent,
      },
      {
        path: 'update/work-route/:id',
        component: ProjectWorkRouteUpdateComponent,
      },
      {
        path: 'create',
        component: ProjectManagementCreateComponent,
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileManagementComponent,
    children: [
      {
        path: 'info',
        component: ProfilePageInfoComponent
      }
    ],
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {
  routes: Routes = [
    {
      path: 'dashboard',
      component: ProjectManagementComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'projects',
      component: ProjectManagementComponent,
      children: [
        {
          path: '',
          component: ProjectManagementListingComponent,
        },
        {
          path: 'detail/:id',
          component: ProjectManagementDetailComponent,
        },
        {
          path: 'update/:id',
          component: ProjectManagementUpdateComponent,
        },
        {
          path: 'create',
          component: ProjectManagementCreateComponent,
        },
      ],
      canActivate: [AuthGuard],
    },
    {
      path: 'profile',
      component: ProfileManagementComponent,
      children: [
        {
          path: 'info',
          component: ProfilePageInfoComponent
        }
      ],
      canActivate: [AuthGuard],
    }
  ];
}
