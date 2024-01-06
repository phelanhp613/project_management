import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonsModule } from "../commons/commons.module";
import { Page404Component } from "./404/page404.component";
import { SinglePageIndexComponent } from "./single-page-index/single-page-index.component";
import { HomeComponent } from "./home/home.component";
import { SinglePageRoutingModule } from "./single-page-routing.module";

@NgModule({
  declarations: [
    SinglePageIndexComponent,
    Page404Component,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CommonsModule,
    RouterOutlet,
    TranslateModule,
    SinglePageRoutingModule,
    SweetAlert2Module,
    ReactiveFormsModule
  ]
})
export class SinglePageModule {}
