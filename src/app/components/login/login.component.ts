import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    try {
      this.authService.authenticate(this.email, this.password);
      this.router.navigate([''], { replaceUrl: true });
    } catch (error) {
      this.snackBar.open(error.message, undefined, { duration: 3000 });
    }
  }

}
