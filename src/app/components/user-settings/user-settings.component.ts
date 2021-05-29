import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  currentUser?: User;

  constructor(private authService: AuthService, private userService: UserService, private snackBar: MatSnackBar) {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    })
  }

  ngOnInit(): void {
  }

  saveChanges(modifiedUser: User) {
    this.userService.modifyUser(modifiedUser);
    this.snackBar.open('User changes saved!', undefined, { duration: 3000 })
  }

}
