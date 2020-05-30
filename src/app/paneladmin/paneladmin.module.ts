import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccueilAdminPage } from './accueil-admin/accueil-admin.page';
import { PanelAdminRoutingModule } from './paneladmin-routing.module';
import { PanelAdminPage } from './paneladmin.page';
import { RecrutementAdminPage } from './recrutement-admin/recrutement-admin.page';
import { RosterAdminPage, SearchPipe } from './roster-admin/roster-admin.page';
import { FormRosterAdminComponent } from './roster-admin/form-roster-admin/form-roster-admin.component';



@NgModule({
  declarations: [
    PanelAdminPage,
    AccueilAdminPage,
    RecrutementAdminPage,
    RosterAdminPage,
    FormRosterAdminComponent,
    SearchPipe,
  ],
  imports: [
    SharedModule,
    PanelAdminRoutingModule
  ],
})
export class PaneladminModule { }
