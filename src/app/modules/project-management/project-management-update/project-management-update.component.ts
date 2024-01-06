import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../../services/project.service";
import { ActivatedRoute } from "@angular/router";
import { ProjectModel } from "../../../commons/models/project.model";
import { GlobalService } from "../../../services/global.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Utils from "../../../commons/utils";
import { NotifyService } from "../../../commons/components/notify/notify.service";

@Component({
  selector: 'app-project-management-update',
  templateUrl: './project-management-update.component.html',
  styleUrls: ['./project-management-update.component.scss']
})
export class ProjectManagementUpdateComponent implements OnInit {
  data: any = new ProjectModel();
  routes: any = {};
  formGroup: any = new FormGroup({
    title: new FormControl('', [Validators.required]),
    slug: new FormControl(),
    description: new FormControl(),
    content: new FormControl(),
    status: new FormControl(1),
  });
  errors: any = {};
  status: any = ProjectModel.getStatus();

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private globalService: GlobalService,
    private notifyService: NotifyService,
  ) {
    this.routes = globalService.routes;
  }

  ngOnInit(): void {
    this.getDetail()
  }

  get getData() {
    return this.data;
  }

  getDetail() {
    const request = this.activatedRoute.snapshot.params;
    this.projectService.getDetail(request['id']).subscribe((response: any) => {
      this.data = ProjectModel.handleData(response);
      this.formGroup.patchValue({
        title: this.data.title,
        slug: this.data.slug,
        description: this.data.description,
        content: this.data.content,
        status: this.data.status,
      });
      this.formGroup.submitted = false;
    })
  }

  onSubmit($event: any) {
    if(this.formGroup.valid) {
      const request = this.activatedRoute.snapshot.params;
      this.formGroup.value.slug = Utils.slugify(this.formGroup.value.slug ? this.formGroup.value.slug : this.formGroup.value.title);
      this.projectService.putUpdate(request['id'], this.formGroup.value).subscribe((response: any) => {
        if(response.status) {
          this.notifyService.success("Updated successfully.");
          this.ngOnInit();
        } else {
          if(response.errors) {
            this.errors = response.errors;
          } else {
            this.notifyService.danger("Something went wrong.");
          }
        }
      });
    }
  }
}
