import { Injectable } from '@angular/core';
import { Notification, NotificationType } from "./notify.model";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private subject = new Subject<Notification>();

  onNotify(): Observable<Notification> {
    return this.subject.asObservable().pipe();
  }

  notify(notify: Notification) {
    this.subject.next(notify);
  }

  success(message: string) {
    this.notify({message: message, type: NotificationType.success, show: true});
  }

  danger(message: string) {
    this.notify({message: message, type: NotificationType.danger, show: true});
  }
}
