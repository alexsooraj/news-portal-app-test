import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReadLaterComponent } from './components/read-later/read-later.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginGuardService } from './guards/login-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: 'registration',
    component: UserRegistrationComponent,
    canActivate: [LoginGuardService]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'read-later',
    component: ReadLaterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-settings',
    component: UserSettingsComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
