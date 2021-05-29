import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../models/Article';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersKey = 'users';

  modifiedUser = new Subject<User>();

  constructor() {
    !window.localStorage.getItem(this.usersKey) && window.localStorage.setItem(this.usersKey, JSON.stringify([]));
  }

  getUsers() {
    return JSON.parse(window.localStorage.getItem(this.usersKey) || '[]') as User[];
  }

  getUser(email: string, password: string) {
    const user = this.getUsers().find(user => user.email === email);
    if(user===undefined) throw new Error('Invalid email id');
    if(user.password!==password) throw new Error('Invalid password');
    return user;
  }

  private setUsers(users: User[]) {
    window.localStorage.setItem(this.usersKey, JSON.stringify(users));
  }

  createUser(newUser: User) {
    const users = this.getUsers();
    if(users.find(user=>user.email===newUser.email)) throw new Error('Email already in use');
    users.push(newUser);
    this.setUsers(users);
  }

  addToFavourites(currentUser: User, article: Article) {
    currentUser.favourites.push(article);
    const users = this.getUsers();
    users.find(user => user.email === currentUser.email)?.favourites.push(article);
    this.setUsers(users);
  }

  modifyUser(updatedUser: User) {
    const users = this.getUsers();
    const userIndex = users.findIndex(cUser => cUser.email === updatedUser.email);
    users[userIndex] = updatedUser;
    this.modifiedUser.next(updatedUser);
    this.setUsers(users);
  }
}
