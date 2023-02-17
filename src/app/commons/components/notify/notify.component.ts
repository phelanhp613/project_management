import { Component, Input, OnInit } from '@angular/core';
import { NotifyService } from "./notify.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {
  dataSource: any = [];
  notifySubscription: Subscription | undefined;
  constructor(private notifyService: NotifyService) {}

  ngOnInit(): void {
    this.notifySubscription = this.notifyService.onNotify().subscribe(
      (notify: any) => {
        this.dataSource.push(notify);

        this.dataSource.forEach((notify: any) => {
          setTimeout(() => {
            notify.show = false;
          }, 5000)
        });
      }
    );
  }
}
