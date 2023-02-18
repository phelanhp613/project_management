import Utils from "../utils";

export class ProjectModel {
  id: any;
  title: any;
  description: any;
  createdAt: any;
  createdBy: any;
  createdByID: any;

  static handleData(data: any) {
    const user = new ProjectModel();
    user.id = data.id;
    user.title = data.title;
    user.description = data.description;
    user.createdAt = Utils.convertISOStringToDateTime(data.created_at);
    const owner = this.getOwner(data);
    user.createdBy = owner.user.name ?? '';
    user.createdByID = owner.user.id ?? '';

    return user;
  }

  static getOwner(data: any) {
    const owner = data.collaborators.filter((val: any) => {
      if(val.owner == 1)
        return val;
    })
    return owner[0] ?? [];
  }
}
