import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../commons/components/notify/notify.service";
import { GlobalComponent } from "../../commons/components/global-component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: any = FormGroup;
  btnDisable: any = false;
  submitted: any = false;
  backendErrors: any = [];
  backendSuccess: any = '';
  routing: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotifyService,
  ) {
    this.routing = GlobalComponent.route;
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
    if(this.formGroup.status == 'VALID') {
      this.authService.register(this.formGroup.value).subscribe((response: any) => {
        if(response.status == true) {
          this.backendErrors = [];
          this.backendSuccess = "Register successfully";
          this.btnDisable = true;
          this.router.navigate([this.routing.signIn]);
          this.notifyService.success(this.backendSuccess);
        } else {
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
