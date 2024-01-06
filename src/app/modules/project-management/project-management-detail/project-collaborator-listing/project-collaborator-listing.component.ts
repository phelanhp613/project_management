import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProjectService } from "../../../../services/project.service";
import { NotifyService } from "../../../../commons/components/notify/notify.service";
import Swal from "sweetalert2";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-project-collaborator-listing',
  templateUrl: './project-collaborator-listing.component.html',
  styleUrls: ['./project-collaborator-listing.component.scss']
})
export class ProjectCollaboratorListingComponent implements OnInit {
  formGroup: any = FormGroup;
  errors: any;

  constructor(
    private projectService: ProjectService,
    private notifyService: NotifyService,
    private translate: TranslateService
  ) { }

  @Input() data: any = [];
  @Input() projectID: any = [];

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.formGroup.submitted = false;
  }

  onSubmit($event: any) {
    this.formGroup.submitted = true;
    if(this.formGroup.valid) {
      this.projectService
          .addCollaborator({project_id: this.projectID, email: this.formGroup.value.email})
          .subscribe((response: any) => {
            if(response.status) {
              this.data.push(response.data);
              this.notifyService.success('Added Collaborator successfully!');
              this.ngOnInit();
            } else {
              this.notifyService.danger(response.message)
            }
          });
    }
  }

  onDelete(email: any) {
    Swal.fire({
      title: this.translate.instant('Delete this item!'),
      text: this.translate.instant('Do you want to continue?'),
      icon: 'error',
      confirmButtonText: this.translate.instant('Delete'),
      showCancelButton: true,
      cancelButtonText: this.translate.instant("Cancel"),
    }).then((r) => {
      if(r.isConfirmed) {
        this.projectService
            .removeCollaborator({project_id: this.projectID, email: email})
            .subscribe((response: any) => {
              if(response.status) {
                this.data = this.data.filter((item: any) => item.user.email !== email);
                this.notifyService.success('Removed Collaborator successfully!')
                this.ngOnInit();
              } else {
                this.notifyService.danger(response.message)
              }
            });
      }
    });
  }
}
