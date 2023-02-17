import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyService } from "../../commons/components/notify/notify.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authImage = "/assets/images/auth-image.jpg";
  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotifyService,
  ) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.notifyService.success('You are logged in!')
      this.router.navigate(['']);
    }
  }
}
