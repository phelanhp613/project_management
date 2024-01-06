import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../../services/user.service";
import { NotifyService } from "../../../../commons/components/notify/notify.service";

@Component({
  selector: 'app-profile-page-info',
  templateUrl: './profile-page-info.component.html',
  styleUrls: ['./profile-page-info.component.scss']
})
export class ProfilePageInfoComponent implements OnInit {
  constructor(
    private userService: UserService,
    private notifyService: NotifyService,
  ) { }

  user: any = {
    name: '',
    email: '',
    phone: null,
    address: ''
  };
  formGroup: any = FormGroup;
  validates: any = {};

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('auth-user') ?? '{}');
    this.formGroup = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.user.phone),
      address: new FormControl(this.user.address),
      password: new FormControl('', [Validators.minLength(6)]),
      re_enter_password: new FormControl(''),
    });
    this.formGroup.submitted = false;
    this.formGroup.addValidators(
      this.confirmPassword(
        this.formGroup.get('password'),
        this.formGroup.get('re_enter_password')
      )
    );
  }

  confirmPassword(controlOne: AbstractControl, controlTwo: AbstractControl) {
    return () => {
      if(controlOne.value !== controlTwo.value) {
        return { re_enter_password: 'Your password does not match.'};
      }
      return null;
    }
  }

  update() {
    this.formGroup.submitted = true;
    if(this.formGroup.valid) {
      this.userService.update(this.user.id, this.formGroup.value).subscribe((response: any) => {
        if(response.status) {
          this.user = response.data;
          this.notifyService.success(response.message);
          localStorage.setItem('auth-user', JSON.stringify(this.user));
          this.formGroup.submitted = false
          this.ngOnInit();
        } else {
          this.validates = response.errors ?? {};
          this.formGroup.submitted = false
        }
      });
    }
  }
}
