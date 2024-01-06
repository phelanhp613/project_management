import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ProjectWorkRouteModel } from "../../../../../commons/models/project-work-route.model";
import { ProjectWorkRouteService } from "../../../../../services/project-work-route.service";
import { NotifyService } from "../../../../../commons/components/notify/notify.service";

@Component({
  selector: 'app-project-work-route-work',
  templateUrl: './project-work-route-work.component.html',
  styleUrls: ['./project-work-route-work.component.scss']
})
export class ProjectWorkRouteWorkComponent implements OnInit {
  constructor(
    private projectWorkRouteService: ProjectWorkRouteService,
    private notifyService: NotifyService,
  ) { }

  formGroup: any = new FormGroup({
    'works': new FormArray([])
  });
  @Input() workRoute: any;
  @Output() dataEmmit: any = new EventEmitter<any>();

  ngOnInit(): void {
    this.workRoute = ProjectWorkRouteModel.handleData(this.workRoute);
    this.workRoute.works.map((item: any) => {
      const formGroup = new FormGroup({
        detail: new FormControl(item.detail),
        content: new FormControl(item.content),
        note: new FormControl(item.note),
        progress: new FormControl(item.progress ?? 0),
      });
      (<FormArray>this.formGroup.get('works')).push(formGroup);
    });
  }

  onSubmit($event: any) {
    let progressSum = 0;
    let progress = 0;
    if(this.formGroup.value.works.length > 0) {
      this.formGroup.value.works.forEach((item: any) => {
        progressSum += parseInt(item.progress);
      });
      progress = parseInt(String((progressSum / (this.formGroup.value.works.length * 100)) * 100));
    }
    this.dataEmmit.emit(progress);
    const data = {
      progress: progress,
      project_id: this.workRoute.project.id,
      title: this.workRoute.title,
      user_id: this.workRoute.user.id,
      works: this.formGroup.value.works
    };
    this.projectWorkRouteService.putUpdate(this.workRoute.id, data).subscribe((response: any) => {
      if(response.status) {
        this.notifyService.success('Successfully!');
      } else {
        this.notifyService.danger('Failed!')
      }
    })
  }

  addRecord() {
    const formGroup = new FormGroup({
      detail: new FormControl(),
      content: new FormControl(),
      note: new FormControl(),
      progress: new FormControl(0),
    });
    (<FormArray>this.formGroup.get('works')).push(formGroup);
  }

  onDelete(i: any) {
    (<FormArray>this.formGroup.get('works')).removeAt(i);
  }
}
