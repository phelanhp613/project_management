import { Component, OnInit } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { ProjectService } from "../../../services/project.service";
import Utils from "../../../commons/utils";
import { Router } from "@angular/router";
import { NotifyService } from "../../../commons/components/notify/notify.service";

@Component({
  selector: 'app-project-management-create',
  templateUrl: './project-management-create.component.html',
  styleUrls: ['./project-management-create.component.scss']
})
export class ProjectManagementCreateComponent implements OnInit {
  routes: any;
  formGroup: any = FormGroup;
  errors: any = {};

  constructor(
    private globalService: GlobalService,
    private projectService: ProjectService,
    private router: Router,
    private notifyService: NotifyService,
  ) {
    this.routes = globalService.routes;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
      slug: new FormControl(),
      description: new FormControl(),
      content: new FormControl(),
    });
    this.formGroup.submitted = false;
  }

  onSubmit($event: any) {
    this.formGroup.submitted = true;
    if(this.formGroup.valid) {
      this.formGroup.value.slug = Utils.slugify(this.formGroup.value.slug ? this.formGroup.value.slug : this.formGroup.value.title);
      this.projectService.postCreate(this.formGroup.value).subscribe((response: any) => {
        if(response.status) {
          this.notifyService.success("Created successfully.");
          this.router.navigate([this.globalService.routes.project.index]);
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
