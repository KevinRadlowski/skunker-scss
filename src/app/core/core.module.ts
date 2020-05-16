import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormSignupComponent } from './signup/form-signup/form-signup.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
      LoginComponent,
      SignupComponent,
      FormSignupComponent,
    ],
    imports: [
      SharedModule,
    ]
  })
  export class CoreModule { }