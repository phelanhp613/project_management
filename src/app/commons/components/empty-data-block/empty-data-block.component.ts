import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from "../../../services/global.service";

@Component({
  selector: 'app-empty-data-block',
  templateUrl: './empty-data-block.component.html',
  styleUrls: ['./empty-data-block.component.scss']
})
export class EmptyDataBlockComponent implements OnInit {
  @Input() route: any = ['/'];
  @Input() type: any = '';

  constructor() { }

  ngOnInit(): void { }

}
