import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import Utils from "../../../commons/utils";
import Swal from "sweetalert2";
import { ProjectModel } from "../../../commons/models/project.model";
import { GlobalService } from "../../../services/global.service";
import { ProjectService } from "../../../services/project.service";
import { NotifyService } from "../../../commons/components/notify/notify.service";
import { TranslateService } from "@ngx-translate/core";
import { LoadingBarService } from "@ngx-loading-bar/core";

@Component({
  selector: 'app-project-management-listing',
  templateUrl: './project-management-listing.component.html',
  styleUrls: ['./project-management-listing.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ProjectManagementListingComponent implements OnInit {
  routes: any;
  paginates: any = [];
  projects: any = [];

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService,
    private notifyService: NotifyService,
    private translate: TranslateService,
  ) {
    this.routes = globalService.routes;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((request: any) => {
      this.projectService.getList(request, request['page']).subscribe((response: any) => {
        if(response.status) {
          const data: any = [];
          response.data.data.forEach((item: any, i: any) => {
            data.push(ProjectModel.handleData(item));
          });
          this.projects = data;
          this.paginates = Utils.setPagination(this.routes.project.index, response.data);
        }
      })
    });
  }

  deleteItem(id: any) {
    Swal.fire({
      title: this.translate.instant('Delete this item!'),
      text: this.translate.instant('Do you want to continue?'),
      icon: 'error',
      confirmButtonText: this.translate.instant('Delete'),
      showCancelButton: true,
      cancelButtonText: this.translate.instant("Cancel"),
    }).then((r) => {
      if(r.isConfirmed) {
        this.projectService.delete(id).subscribe((response: any) => {
          this.notifyService.success('Deleted Successfully')
          this.ngOnInit();
        });
      }
    });
  }
}
