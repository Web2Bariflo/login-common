import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuperadminCreateAdminComponent } from './superadmin-create-admin/superadmin-create-admin.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PasswordSuccessComponent } from './password-success/password-success.component';
import { OtpCheckComponent } from './otp-check/otp-check.component';
// SuperadminCreateAdminComponent
// AdminUsersComponent
const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin-create',component:SuperadminCreateAdminComponent},
  {path:'admins-view',component:AdminUsersComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'check-otp', component:OtpCheckComponent},
  {path:'password-success', component:PasswordSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
