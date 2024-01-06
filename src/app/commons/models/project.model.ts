import Utils from "../utils";

export class ProjectModel {
  id: any;
  title: any;
  slug: any;
  content: any;
  description: any;
  progress: any = 0;
  createdAt: any;
  createdBy: any;
  host: any;
  collaborators: any;
  status: any;
  sortWorks: any = [];
  statusValue: any;

  static handleData(data: any) {
    const model = new this();
    model.id = data.id;
    model.title = data.title;
    model.slug = data.slug;
    model.progress = data.progress;
    model.content = data.content;
    model.description = data.description;
    model.createdAt = Utils.convertISOStringToDateTime(data.created_at, 'dd-MM-yyyy HH:mm');
    model.host = this.getHost(data);
    model.collaborators = data.collaborators;
    model.createdBy = data.created_by;
    model.status = data.status;
    model.sortWorks = JSON.parse(data.sort_works ?? '[]');

    model.statusValue = ProjectModel.getStatus(data.status);

    return model;
  }

  static getHost(data: any) {
    data = data.collaborators.filter((val: any) => {
      if(val.role == 'host')
        return val;
    })
    return data[0].user ?? [];
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
