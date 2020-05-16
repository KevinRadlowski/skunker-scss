import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AccueilPage } from './accueil/accueil.page';
import { PanelAdminRoutingModule } from './paneladmin-routing.module';
import { PanelAdminPage } from './paneladmin.page';
import { RecrutementPage } from './recrutement/recrutement.page';



@NgModule({
  declarations: [
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
