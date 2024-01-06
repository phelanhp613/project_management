import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from "../../../../services/global.service";
import { ActivatedRoute } from "@angular/router";
import { ProjectWorkRouteModel } from "../../../../commons/models/project-work-route.model";
import { ProjectWorkRouteService } from "../../../../services/project-work-route.service";

@Component({
  selector: 'app-project-work-route',
  templateUrl: './project-work-route.component.html',
  styleUrls: ['./project-work-route.component.scss']
})
export class ProjectWorkRouteComponent implements OnInit {
  @Input() project: any;
  routes: any;
  data: any = [];
  currentPage: any = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService,
    private projectWorkRouteService: ProjectWorkRouteService,
  ) {
    this.routes = globalService.routes;
  }

  ngOnInit(): void {
    this.getData();
  }

  get step() {
    return this.activatedRoute.snapshot.fragment;
  }

  getData() {
    if(this.project.id) {
      const request = this.activatedRoute.snapshot.params;
      this.projectWorkRouteService.getList({project_id: request['id']}, this.currentPage + 1).subscribe((response: any) => {
        this.currentPage = response.next_page_url ? response.current_page : false;
        let data = this.sortInit(response.data, this.project.sortWorks);
        let progressSum = 0;
        data = data.map((item: any) => {
          progressSum += parseInt(item.progress);
          return ProjectWorkRouteModel.handleData(item);
        });
        this.data = [...this.data, ...data];
      });
    }
  }

  sortInit(data: any, sortWorks: any) {
    const sort: any = [];
    sortWorks.forEach((a: any, i: any) => {
      sort[a.id] = i;
    });
    return data.sort(function(a: any, b: any) {
      return sort[a.id] - sort[b.id];
    });
  }

  loadMore() {
    this.getData();
  }

  scrollTo(step: any) {
    const element = document.querySelector('#'+step);
    if(element) element.scrollIntoView();
  }
}
