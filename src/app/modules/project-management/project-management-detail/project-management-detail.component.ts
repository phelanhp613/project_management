import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../../../services/project.service";
import { GlobalService } from "../../../services/global.service";
import { ProjectModel } from "../../../commons/models/project.model";

@Component({
  selector: 'app-project-management-detail',
  templateUrl: './project-management-detail.component.html',
  styleUrls: ['./project-management-detail.component.scss']
})
export class ProjectManagementDetailComponent implements OnInit {
  data: any = {};
  routes: any;
  progress: any = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private globalService: GlobalService,
  ) {
    this.routes = globalService.routes;
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const request = this.activatedRoute.snapshot.params;
    this.projectService.getDetail(request['id']).subscribe((project: any) => {
      this.data = ProjectModel.handleData(project);
      console.log(this.data);
      let progressSum = 0;
      this.data.sortWorks.forEach((item: any) => {
        progressSum += item.progress;
      });
      this.progress = parseInt(String((progressSum / (this.data.sortWorks.length * 100)) * 100));
    });
  }
}
