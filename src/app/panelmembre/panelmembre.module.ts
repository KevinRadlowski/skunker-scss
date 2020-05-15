import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DkphistoriqueComponent } from './dkphistorique/dkphistorique.component';
import { DkpmodifyComponent } from './dkpmodify/dkpmodify.component';
import { PanelmembreRoutingModule } from './panelmembre-routing.module';
import { PanelmembreComponent } from './panelmembre.component';


@NgModule({
  declarations: [
    PanelmembreComponent,
    DkphistoriqueComponent,
    DkpmodifyComponent,
  ],
  imports: [
    SharedModule,
    PanelmembreRoutingModule,
  ]
})
export class PanelmembreModule { }
