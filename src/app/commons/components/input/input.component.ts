import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  name: any = '';
  parent: any;
  @Input() validate: boolean = false;
  @Input() type: string = 'text';
  @Input() label: string = this.name;
  @Input() rows: string = '10';
  @Input() error: string = '';
  @Input() control: AbstractControl | FormControl | any = new FormControl();
  @Input() id: string = this.name;
  @Input() options: any = [];
  @HostBinding('class') class = 'form-group d-block';

  constructor() {}

  ngOnInit(): void {
    this.parent = this.control?.parent;
    this.name = this.getControlName();
    this.label = this.label ? this.label : this.name;
    this.id = this.id ? this.id : this.name;
  }

  getControlName() {
    const c = this.control;
    const formGroup = this.parent.controls;
    return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
  }

  checkValidate(invalid: boolean = false): boolean {
    return (this.parent.submitted || this.control.touched) && ((invalid) ? (this.control.invalid || this.error) : this.control.valid);
  }
}
