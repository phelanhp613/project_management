import { formatDate } from "@angular/common";
import { environment } from "../../environments/environment";

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

  static convertISOStringToDateTime(date: any, format: any = 'dd-MM-yyyy HH:mm:ss') {
    date = new Date(Date.parse(date));
    return formatDate(date, format, 'en', 'Asia/Ho_Chi_Minh');
  }

  static getAPI() {
    let env: any = environment;
    env.api.url = (env.server == 'local') ? env.api.urlLocal : env.api.urlProd;
    return env.api;
  }

  static slugify(str: string) {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return str.toString().toLowerCase()
                 .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
                 .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
                 .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
                 .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
                 .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
                 .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
                 .replace(/đ/gi, 'd')
                 .replace(/\s+/g, '-')
                 .replace(p, c => b.charAt(a.indexOf(c)))
                 .replace(/&/g, '-and-')
                 .replace(/[^\w\-]+/g, '')
                 .replace(/\-\-+/g, '-')
                 .replace(/^-+/, '')
                 .replace(/-+$/, '')
  }
}
