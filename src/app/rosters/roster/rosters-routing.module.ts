import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosterComponent } from './roster.component';

const rostersRoutes: Routes = [
  { path: 'rosters', component: RosterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(rostersRoutes)],
  exports: [RouterModule]
})
export class RostersRoutingModule { }
