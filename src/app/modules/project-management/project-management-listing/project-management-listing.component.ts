import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProjectService } from "../../../services/project.service";
import { GlobalComponent } from "../../../commons/components/global-component";
import Utils from "../../../commons/utils";
import { ProjectModel } from "../../../commons/models/project.model";

@Component({
  selector: 'app-project-management-listing',
  templateUrl: './project-management-listing.component.html',
  styleUrls: ['./project-management-listing.component.scss']
})
export class ProjectManagementListingComponent implements OnInit {
  routing: any;
  paginates: any = [];
  projects: ProjectModel[] = [];

  constructor(
    private router: Router,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.routing = GlobalComponent.route;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((request: any) => {
      this.projectService.getList(request, request['page']).subscribe((response: any) => {
        if(response.status) {
          response.data.data.forEach((item:any, i: any) => {
            this.projects.push(ProjectModel.handleData(item));
          })

          this.paginates = Utils.setPagination(this.routing.projectManagementListing, response.data);
        }
      })
    });
  }

  redirectToDetail(id: any) {
    this.router.navigateByUrl(this.routing.projectManagementDetail + id);
  }

  deleteItem(id: any) {
    /*Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })*/
    /*this.projectService.delete(id).subscribe((response: any) => {
        console.log(response);

    });*/
  }
}
