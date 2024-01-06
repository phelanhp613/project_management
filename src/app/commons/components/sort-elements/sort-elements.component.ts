import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-sort-elements',
  templateUrl: './sort-elements.component.html',
  styleUrls: ['./sort-elements.component.scss']
})
export class SortElementsComponent implements OnInit {

  constructor() { }

  @Input() data: any = [];
  @Output() dataEmit: any = new EventEmitter<string>();

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
    this.dataEmit.emit(true);
  }
}
