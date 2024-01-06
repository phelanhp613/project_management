import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../commons/components/notify/notify.service";
import { GlobalService } from "../../services/global.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: any = FormGroup;
  backendErrors: any = [];
  submitted: any = false;
  validated: boolean = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private globalService: GlobalService,
    private notifyService: NotifyService,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(e: any) {
    this.submitted = true;
    this.validated = this.formGroup.status == 'VALID';
    if(this.validated) {
      this.authService.login(this.formGroup.value).subscribe((response: any) => {
        if(response.status) {
          this.notifyService.success(response.message);
          this.router.navigate([this.globalService.routes.dashboard]);
        } else {
          this.backendErrors = [response.message ?? ""];
          this.submitted = false;
        }
      });
    }
  }

  get formInfo(): {[key: string]: AbstractControl} {
    return this.formGroup.controls;
  }
}
