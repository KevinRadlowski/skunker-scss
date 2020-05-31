import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardAdmin } from '../core/auth/auth.guardadmin';
import { AccueilAdminPage } from './accueil-admin/accueil-admin.page';
import { PanelAdminPage } from './paneladmin.page';
import { RecrutementAdminPage } from './recrutement-admin/recrutement-admin.page';
import { RosterAdminPage } from './roster-admin/roster-admin.page';
import { MembreListAdminPage } from './membre-list-admin/membre-list-admin.page';


const paneladminRoutes: Routes = [
  {
    path: 'paneladmin', canActivate: [AuthGuardAdmin], component: PanelAdminPage,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'recrutement', component: RecrutementAdminPage },
      { path: 'accueil', component: AccueilAdminPage },
      { path: 'roster', component: RosterAdminPage },
      { path: 'membres-liste', component: MembreListAdminPage },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(paneladminRoutes)],
  exports: [RouterModule]
})
export class PanelAdminRoutingModule { }
