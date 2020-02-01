import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './services/login/login.component';

const paneladminRoutes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(paneladminRoutes)],
  exports: [RouterModule]
})
export class PaneladminRoutingModule { }
