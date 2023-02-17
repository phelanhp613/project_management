import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-management-listing',
  templateUrl: './project-management-listing.component.html',
  styleUrls: ['./project-management-listing.component.scss']
})
export class ProjectManagementListingComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  redirectToDetail(id: any) {
    this.router.navigateByUrl('/project-management/detail' + '/' + id);
  }

}
