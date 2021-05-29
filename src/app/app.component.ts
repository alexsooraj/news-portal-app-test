import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/User';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser?: User;
  constructor(private authService: AuthService, private router: Router) {
    this.currentUser = undefined;
    authService.currentUser.subscribe(user => this.currentUser = user);
  }
  gotoUserSettings () {
    this.router.navigate(['user-settings']);
  }
  gotoHome() {
    this.router.navigate(['']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
