import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate-message',
  templateUrl: './validate-message.component.html',
  styleUrls: ['./validate-message.component.scss']
})
export class ValidateMessageComponent implements OnInit {

  constructor() { }

  @Input() validate = null

  ngOnInit(): void {
  }

}
