export class Notification {
  message?: string;
  type?: string;
  show: any;
}

export enum NotificationType {
  success = 'success',
  danger = 'danger'
}
