import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnConstructionComponent } from './shared/en-construction/en-construction.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: 'en-construction', component: EnConstructionComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
