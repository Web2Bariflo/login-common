import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppHttpClientModule } from './app-http-client/app-http-client.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { SuperadminCreateAdminComponent } from './superadmin-create-admin/superadmin-create-admin.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoviewAccountComponent } from './noview-account/noview-account.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { SuperAdminDeleteAdminComponent } from './super-admin-delete-admin/super-admin-delete-admin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotCheckComponent } from './forgot-check/forgot-check.component';
import { PasswordSuccessComponent } from './password-success/password-success.component';
import { OtpCheckComponent } from './otp-check/otp-check.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterSuccessComponent,
    SuperadminCreateAdminComponent,
    NoviewAccountComponent,
    AdminUsersComponent,
    SuperAdminDeleteAdminComponent,
    ForgotPasswordComponent,
    ForgotCheckComponent,
    PasswordSuccessComponent,
    OtpCheckComponent
  ],
  imports: [
    AppHttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

    BrowserAnimationsModule,
    MatSelectModule,
    MatIconModule,
MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
MatInputModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
 MatSnackBarModule,
    MatSidenavModule,
 MatCheckboxModule,
    MatDialogModule,
MatListModule,
    MatIconModule,
    MatMenuModule,
MatSelectModule,
MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
