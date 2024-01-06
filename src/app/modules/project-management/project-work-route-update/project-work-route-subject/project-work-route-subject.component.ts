import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProjectWorkRouteModel } from "../../../../commons/models/project-work-route.model";
import { ProjectWorkRouteService } from "../../../../services/project-work-route.service";
import { NotifyService } from "../../../../commons/components/notify/notify.service";
import { TranslateService } from "@ngx-translate/core";
import Swal from "sweetalert2";
import { LocalStorageService } from "../../../../services/local-storage.service";

@Component({
  selector: 'app-project-work-route-subject',
  templateUrl: './project-work-route-subject.component.html',
  styleUrls: ['./project-work-route-subject.component.scss']
})
export class ProjectWorkRouteSubjectComponent implements OnInit {
  status: any = [...[{value: '', text: this.translateService.instant('Select')}], ...ProjectWorkRouteModel.getStatus()];
  collaborators: any = [];
  formGroup: any = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(),
    content: new FormControl(),
    progress: new FormControl(0),
    user_id: new FormControl('', [Validators.required]),
    status: new FormControl(1, [Validators.required]),
  });
  owner: any = false;
  @Input() data: any = {};
  @Input() project: any = {};
  @Input() isHost: any = false;
  @Output() dataEmmit: any = new EventEmitter<any>();

  constructor(
    private projectWorkRouteService: ProjectWorkRouteService,
    private notifyService: NotifyService,
    private translateService: TranslateService,
    private translate: TranslateService,
    private localStorage: LocalStorageService,
  ) {}

  ngOnInit(): void {
    if(this.data.id) {
      const user = this.localStorage.getUser();
      this.owner = this.data.user_id == user.id;
      this.updateFormValue(this.data);
    } else {
      this.formGroup.patchValue({user_id: this.project.host.user_id})
    }
    this.formGroup.submitted = false;
    this.collaborators = this.project.collaborators.map((item: any) => {
      return {
        value: item.user.id,
        text: item.user.name
      }
    });
  }

  onSubmit($event: any) {
    this.formGroup.submitted = true;
    if(this.formGroup.valid && this.isHost) {
      this.formGroup.value.project_id = this.project.id;
      if(this.data.id) {
        this.projectWorkRouteService.putUpdate(this.data.id, this.formGroup.value).subscribe((response: any) => {
          if(response.status) {
            this.notifyService.success('Successfully');
            this.updateFormValue(this.formGroup.value);
            this.setDataEmmit({...this.formGroup.value, ...{id: this.data.id}});
          } else {
            this.notifyService.danger('Failed');
          }
        });
        this.formGroup.submitted = false;
      } else {
        this.projectWorkRouteService.postCreate(this.formGroup.value).subscribe((response: any) => {
          if(response.status) {
            this.notifyService.success('Successfully');
            this.setDataEmmit({...this.formGroup.value, ...{id: response.data.id}});
            this.formGroup = new FormGroup({
              title: new FormControl('', [Validators.required]),
              description: new FormControl(),
              content: new FormControl(),
              progress: new FormControl(0),
              user_id: new FormControl(this.project.host.user_id, [Validators.required]),
              status: new FormControl(1, [Validators.required]),
            });
          } else {
            this.notifyService.danger('Failed');
          }
        });
      }
    }
  }

  updateFormValue(data: any) {
    this.formGroup.patchValue({
      title: data.title,
      description: data.description,
      content: data.content,
      status: data.status,
      user_id: data.user_id,
      progress: data.progress,
    });
  }

  setDataEmmit(data:any) {
    this.dataEmmit.emit({
      id: data.id,
      title: data.title,
      deleted: data.deleted ?? false,
      description: data.description,
      content: data.content,
      status: data.status,
      user_id: data.user_id,
      progress: data.progress,
    });
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
          this.setDataEmmit({...this.formGroup.value, ...{id: id, deleted: true}});
        });
      }
    });
  }

  updateProgress(progress: any) {
    this.data.progress = progress;
  }
}
