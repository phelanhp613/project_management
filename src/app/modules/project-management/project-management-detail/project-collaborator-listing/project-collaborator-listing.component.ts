import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-collaborator-listing',
  templateUrl: './project-collaborator-listing.component.html',
  styleUrls: ['./project-collaborator-listing.component.scss']
})
export class ProjectCollaboratorListingComponent implements OnInit {

  constructor() { }

  @Input() data: any = [];

  ngOnInit(): void {
  }

}
