import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../core/login/login.component';
import { SignupComponent } from '../core/signup/signup.component';
import { PanelAdminPage } from './paneladmin.page';
import { RecrutementPage } from './recrutement/recrutement.page';
import { AccueilPage } from './accueil/accueil.page';

const paneladminRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'paneladmin', component: PanelAdminPage,
  children: [
    { path: 'recrutement', component: RecrutementPage },
    { path: 'accueil', component: AccueilPage },
]
}
  
];

@NgModule({
  imports: [RouterModule.forChild(paneladminRoutes)],
  exports: [RouterModule]
})
export class PanelAdminRoutingModule { }
