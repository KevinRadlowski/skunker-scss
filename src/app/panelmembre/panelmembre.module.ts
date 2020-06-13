import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MembreAccountPage } from './member-account/member-account.page';
import { MembreCharacterPage } from './member-character/member-character.page';
import { PanelmembreRoutingModule } from './panelmembre-routing.module';
import { PanelmembreComponent } from './panelmembre.component';
import { MembreAccountFormComponent } from './member-account/member-account-form/member-account-form.component';
import { MembreAccountPasswordComponent } from './member-account/member-account-password/member-account-password.component';


@NgModule({
  declarations: [
    PanelmembreComponent,
    MembreAccountPage,
    MembreCharacterPage,
    MembreAccountFormComponent,
    MembreAccountPasswordComponent,
  ],
  imports: [
    SharedModule,
    PanelmembreRoutingModule,
  ]
})
export class PanelmembreModule { }
