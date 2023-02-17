import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../notify/notify.service";
import { GlobalComponent } from "../../global-component";

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {
  loggedIn: boolean = false;
  route: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotifyService,
  ) {
    this.route = GlobalComponent.route;
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
    this.authService.checkLoggedIn().subscribe((response: any) => {
      this.loggedIn = response.isLoggedIn;
    });
  }

  signOut() {
    this.authService.logout().subscribe((response: any) => {
      if(response.status) {
        this.router.navigate([this.route.signIn]);
        this.notifyService.success(response.message ?? '')
      } else {
        this.notifyService.danger(response.message ?? '')
      }
    });
  }
}
