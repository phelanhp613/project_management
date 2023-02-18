import { formatDate } from "@angular/common";

export default class Utils {
  static setPagination(url: string, dataSource: any) {
    const paginates = [];

    const currentPage = dataSource.current_page;
    const totalPage = dataSource.last_page;
    const prevPage = (currentPage == dataSource.per_page) ? dataSource.per_page : dataSource.current_page - 1;
    const nextPage = (currentPage == dataSource.last_page) ? dataSource.last_page : dataSource.current_page + 1;

    if(totalPage > 1) {
      paginates.push({
        title: "<<",
        page: prevPage,
        url: url,
        disable: prevPage == currentPage
      });
      for(let i = 1; i <= totalPage; i++) {
        paginates.push({
          title: i,
          page: i,
          url: url,
          isCurrent: currentPage == i
        });
      }
      paginates.push({
        title: ">>",
        page: nextPage,
        url: url,
        disable: nextPage == currentPage
      });
    }

    return paginates;
  }

  static convertISOStringToDateTime(date: any) {
    date = new Date(Date.parse(date));
    return formatDate(date, 'dd-MM-yyyy h:m:s', 'en', 'Asia/Ho_Chi_Minh');
  }
}
