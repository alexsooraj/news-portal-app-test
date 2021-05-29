import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private curUserKey = 'currentUser';

  currentUser: BehaviorSubject<User | undefined>;

  constructor(public userService: UserService) {
    const userStr = window.localStorage.getItem(this.curUserKey);
    const currentUser = userStr !== null ? JSON.parse(userStr) : undefined;
    this.currentUser = new BehaviorSubject(currentUser);
    userService.modifiedUser.subscribe(modifiedUser => {
      this.currentUser.next(modifiedUser);
      window.localStorage.setItem(this.curUserKey, JSON.stringify(modifiedUser));
    });
  }

  authenticate(email: string, password: string) {
    const user = this.userService.getUser(email, password);
    window.localStorage.setItem(this.curUserKey, JSON.stringify(user));
    this.currentUser.next(user);
  }

  isAuthenticated() {
    return this.currentUser.value !== undefined;
  }

  logout() {
    window.localStorage.removeItem(this.curUserKey);
    this.currentUser.next(undefined);
  }
}
