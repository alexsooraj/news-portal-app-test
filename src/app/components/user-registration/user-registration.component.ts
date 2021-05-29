import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }

  createUser(user: User) {
    try{
      this.userService.createUser(user);
      this.router.navigate(['login']);
      this.snackBar.open("User created successfuly, please login to continue.", undefined, { duration: 5000 });
    }
    catch(error) {
      this.snackBar.open(error.message, undefined, { duration: 3000 });
    }
  }

}
