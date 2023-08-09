import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../commons/components/notify/notify.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: any = FormGroup;
  btnDisable: any = false;
  submitted: any = false;
  backendErrors: any = [];
  backendSuccess: any = '';

  constructor(
    private authService: AuthService,
    private router: Router,
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
    this.authService.login(this.formGroup.value).subscribe(
      (response: any) => {
        if(response.status) {
          this.btnDisable = true;
          this.notifyService.success(response.message);
          /*if(response.data.role) {
           this.notifyService.success("U are admin");
           } else {*/
          this.router.navigate(['']);
          // }
        } else {
          this.backendErrors = [response.message ?? ""];
        }
      });
  }

  get formInfo(): {[key: string]: AbstractControl} {
    return this.formGroup.controls;
  }
}
