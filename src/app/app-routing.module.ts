import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesModule } from "./modules/modules.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/modules.module').then(
        (m) => m.ModulesModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
