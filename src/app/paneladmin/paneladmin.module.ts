import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

import { SharedModule } from '../shared/shared.module';
import { PanelAdminRoutingModule } from './paneladmin-routing.module';
import { SignupComponent } from './signup/signup.component';
import { FormSignupComponent } from './signup/form-signup/form-signup.component';
import { PanelAdminPage } from './paneladmin.page';
import { AccueilPage } from './accueil/accueil.page';
import { RecrutementPage } from './recrutement/recrutement.page';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FormSignupComponent,
    PanelAdminPage,
    AccueilPage,
    RecrutementPage,
  ],
  imports: [
    SharedModule,
    PanelAdminRoutingModule
  ]
})
export class PaneladminModule { }
