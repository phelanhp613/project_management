import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project-management-detail',
  templateUrl: './project-management-detail.component.html',
  styleUrls: ['./project-management-detail.component.scss']
})
export class ProjectManagementDetailComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getDetail();
  }
  getDetail() {
    this.activatedRoute.params.subscribe((request: any) => {
      const params = {
        id: request.id
      };

      console.log(params);
    });
  }
}
