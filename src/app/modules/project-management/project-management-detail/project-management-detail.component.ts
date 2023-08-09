import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../../../services/project.service";

@Component({
  selector: 'app-project-management-detail',
  templateUrl: './project-management-detail.component.html',
  styleUrls: ['./project-management-detail.component.scss']
})
export class ProjectManagementDetailComponent implements OnInit {
  data: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    ) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    const request = this.activatedRoute.snapshot.params;
    this.projectService.getDetail(request['id']).subscribe((response: any) => {
      this.data = response;

      console.log(this.data);
    })
  }
}
