import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil.component';

const accueilRoutes: Routes = [
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(accueilRoutes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule { }
