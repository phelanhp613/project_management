import { Component } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-management';
  loading = true;

  constructor(
    private authService: AuthService,
  ) {
    if(this.authService.isLoggedIn) {
      this.authService.profile().subscribe();
    }
  }
}
