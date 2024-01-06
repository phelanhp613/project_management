import { Component } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { ProjectModel } from "../../../commons/models/project.model";
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../../../services/project.service";
import { ProjectWorkRouteService } from "../../../services/project-work-route.service";
import { ReplaySubject } from "rxjs";
import Swal from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";
import { NotifyService } from "../../../commons/components/notify/notify.service";
import { LocalStorageService } from "../../../services/local-storage.service";

@Component({
  selector: 'app-project-work-route-update',
  templateUrl: './project-work-route-update.component.html',
  styleUrls: ['./project-work-route-update.component.scss'],
})
export class ProjectWorkRouteUpdateComponent {
  routes: any = {};
  project: any = new ProjectModel();
  data: any = [];
  isHost: any = false;
  destroy$: any = new ReplaySubject<boolean>();

  constructor(
    public globalService: GlobalService,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private projectWorkRouteService: ProjectWorkRouteService,
    private translate: TranslateService,
    private notifyService: NotifyService,
    private localStorage: LocalStorageService,
  ) {
    this.routes = globalService.routes
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.getData();
  }

  sort(sorted: any) {
    if(sorted) {
      const project = {
        title: this.project.title,
        sort_works: this.data.map((item: any) => ({id: item.id, progress: item.progress}))
      }
      this.projectService.putUpdate(this.project.id, project).subscribe();
    }
  }

  get fragment() {
    return this.activatedRoute.snapshot.fragment;
  }

  getData() {
    const request = this.activatedRoute.snapshot.params;
    this.projectService.getDetail(request['id']).subscribe((project: any) => {
      this.project = ProjectModel.handleData(project);
      const user = this.localStorage.getUser();
      this.isHost = user.id == this.project.host.id;
      this.projectWorkRouteService.getList({project_id: request['id']}, request['page'], 1000).subscribe((workRoute: any) => {
        this.data = this.sortInit(workRoute.data, this.project.sortWorks);
      });
    });
    /*combineLatest([
     this.projectService.getDetail(request['id']),
     this.projectWorkRouteService.getList({project_id: request['id']}, request['page'])
     ]).pipe(takeUntil(this.destroy$)).subscribe(([project, workRoute]) => {
     this.project = ProjectModel.handleData(project);
     const sort: any = [];
     JSON.parse(this.project.sortWorks).forEach(function(a: any, i: any) { sort[a] = i; });
     this.data = workRoute.sort(function(a: any, b: any) {
     return sort[a.id] - sort[b.id];
     });
     });*/
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

  workRouteDataEmmit(data: any) {
    if(data.deleted) {
      this.data = this.data.filter((item: any) => item.id !== data.id);
    } else {
      const work = this.data.filter((item: any) => item.id === data.id);
      if(work.length > 0) {
        this.data = this.data.map((item: any) => {
          if(item.id == data.id) {
            item = {...item, ...data};
          }
          return item
        });
      } else {
        this.data.push(data);
      }
    }
  }

  onDelete(id: any) {
    Swal.fire({
      title: this.translate.instant('Delete this item!'),
      text: this.translate.instant('Do you want to continue?'),
      icon: 'error',
      confirmButtonText: this.translate.instant('Delete'),
      showCancelButton: true,
      cancelButtonText: this.translate.instant("Cancel"),
    }).then((r) => {
      if(r.isConfirmed) {
        this.projectWorkRouteService.delete(id).subscribe((response: any) => {
          this.notifyService.success('Deleted Successfully');
          this.data = this.data.filter((item: any) => item.id !== id);
        });
      }
    });
  }
}
