import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const paneladminRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(paneladminRoutes)],
  exports: [RouterModule]
})
export class PaneladminRoutingModule { }
