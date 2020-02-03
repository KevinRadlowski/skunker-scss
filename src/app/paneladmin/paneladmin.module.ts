import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

import { SharedModule } from '../shared/shared.module';
import { PaneladminRoutingModule } from './paneladmin-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormSignupComponent } from './signup/form-signup/form-signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FormSignupComponent
  ],
  imports: [
    SharedModule,
    PaneladminRoutingModule
  ]
})
export class PaneladminModule { }
