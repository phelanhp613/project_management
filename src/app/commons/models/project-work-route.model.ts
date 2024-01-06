import Utils from "../utils";

export class ProjectWorkRouteModel {
  id: any;
  title: any;
  content: any;
  description: any;
  progress: any = 0;
  createdAt: any;
  createdBy: any;
  user: any;
  project: any;
  status: any;
  works: any;
  statusValue: any;

  static handleData(data: any) {
    const model = new this();
    model.id = data.id;
    model.title = data.title;
    model.progress = data.progress;
    model.description = data.description;
    model.content = data.content;
    model.user = data.user;
    model.project = data.project;
    model.createdAt = Utils.convertISOStringToDateTime(data.created_at);
    model.createdBy = data.created_by;
    model.status = data.status;
    model.works = JSON.parse(data.works);
    model.statusValue = this.getStatus(data.status);

    return model;
  }

  static getHost(data: any) {
    data = data.collaborators.filter((val: any) => {
      if(val.role == 'host')
        return val;
    })
    return data[0] ?? [];
  }

  static getStatus(status: any = null) {
    const statuses = [
      {value: 1, text: 'Active'},
      {value: 0, text: 'Inactive'},
    ];
    if(status !== null) {
      status = statuses.filter((i) => status === i.value);
      return status![0]?.text ?? 'Status Undefined';
    }

    return statuses;
  }
}
