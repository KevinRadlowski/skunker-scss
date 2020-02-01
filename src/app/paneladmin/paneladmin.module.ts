import { NgModule } from '@angular/core';

import { LoginComponent } from './services/login/login.component';

import { SharedModule } from '../shared/shared.module';
import { PaneladminRoutingModule } from './paneladmin-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    PaneladminRoutingModule
  ]
})
export class PaneladminModule { }
