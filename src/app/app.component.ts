import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly authService: AuthService) {}

  isUserLoggedIn(): boolean {
    return this.authService.isLoggedin;
  }

  logout() {
    this.authService.logout();
  }
  title = 'myApp';
}
