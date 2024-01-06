import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Page404Component } from "./404/page404.component";
import { SinglePageIndexComponent } from "./single-page-index/single-page-index.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: SinglePageIndexComponent,
    children: [
      {
        path: '404.html',
        component: Page404Component,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePageRoutingModule {}
