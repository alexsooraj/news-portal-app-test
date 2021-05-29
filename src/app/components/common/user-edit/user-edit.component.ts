import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {


  @Input() user?: User = undefined;
  @Output() onSaveChanges = new EventEmitter<User>();

  email = "";
  password = "";
  name = "";

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.user!==undefined) {
      this.email = this.user.email;
      this.password = this.user.password;
      this.name = this.user.name;
    }
  }

  validate(email: string, password: string, name: string) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRegex)) throw new Error('Invalid email ID');
    if (!this.isValid(password)) throw new Error('Invalid password');
    if (!this.isValid(name)) throw new Error('Invalid name');
  }

  isValid(str: string) {
    if (str.trim() === '') return false;
    return !/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  }

  saveChanges() {
    try {
      this.validate(this.email, this.password, this.name);
      this.onSaveChanges.emit({
        email: this.email,
        password: this.password,
        name: this.name,
        favourites: this.user !== undefined ? this.user.favourites : []
      });
    }
    catch (error) {
      this.snackBar.open(error.message, undefined, { duration: 3000 });
    }
  }

}
