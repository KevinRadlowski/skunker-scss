import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnConstructionComponent } from './shared/en-construction/en-construction.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: 'en-construction', component: EnConstructionComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
