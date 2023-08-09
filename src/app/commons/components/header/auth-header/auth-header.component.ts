import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../notify/notify.service";
import { GlobalComponent } from "../../global-component";
import { TokenStorageService } from "../../../../services/token-storage.service";

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.scss']
})
export class AuthHeaderComponent implements OnInit {
  loggedIn: boolean = false;
  route: any;
  user: any = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotifyService,
    private tokenStorageService: TokenStorageService,
  ) {
    this.route = GlobalComponent.route;
  }

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
    this.authService.checkLoggedIn().subscribe((response: any) => {
      if(response.isLoggedIn) {
        this.authService.profile().subscribe((profile: any) => {
          this.user = profile;
        });
      }
      this.loggedIn = response.isLoggedIn;
    });
  }

  signOut() {
    this.authService.logout().subscribe((response: any) => {
      this.notifyService.success('Logged Out Successfully');
      this.router.navigate([this.route.signIn]);
    });
  }
}
