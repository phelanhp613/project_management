import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../commons/components/notify/notify.service";
import { GlobalService } from "../../services/global.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: any = FormGroup;
  submitted: any = false;
  backendErrors: any = [];
  backendSuccess: any = '';
  routing: any;
  validated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotifyService,
    private globalService: GlobalService,
  ) {
    this.routing = globalService.routes;
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(e: any) {
    this.submitted = true;
    this.validated = this.formGroup.status == 'VALID';
    if(this.validated) {
      this.validated = true;
      this.authService.register(this.formGroup.value).subscribe((response: any) => {
        if(response.status == true) {
          this.backendErrors = [];
          this.backendSuccess = "Register successfully";
          this.router.navigate([this.routing.signIn]);
          this.notifyService.success(this.backendSuccess);
        } else {
          this.submitted = false;
          this.backendSuccess = "";
          if(response.errors != undefined) {
            this.backendErrors = Object.keys(response.errors).map((key) => {
              return response.errors[key];
            });
          } else {
            this.backendErrors = ['Something went wrong!']
          }
        }
      });
    }
  }

  get formInfo(): {[key: string]: AbstractControl} {
    return this.formGroup.controls;
  }
}
