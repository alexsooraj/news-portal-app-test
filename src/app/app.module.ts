import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReadLaterComponent } from './components/read-later/read-later.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SectionsComponent } from './components/home/sections/sections.component';
import { MainComponent } from './components/home/main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FilterBySectionPipe } from './pipes/filter-by-section.pipe';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserEditComponent } from './components/common/user-edit/user-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

const MaterialModules = [
  MatInputModule,
  FormsModule,
  MatButtonModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatProgressBarModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ReadLaterComponent,
    UserRegistrationComponent,
    PaginatorComponent,
    SectionsComponent,
    MainComponent,
    FilterBySectionPipe,
    UserEditComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
