import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnConstructionComponent } from './shared/en-construction/en-construction.component';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { PageNonConnecte } from './shared/page-non-connecte/page-non-connecte.page';

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'en-construction', component: EnConstructionComponent},
  { path: 'non-connecte', component: PageNonConnecte},
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
