import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(): boolean {
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    }
}