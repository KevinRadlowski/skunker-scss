import { NgModule } from '@angular/core';

import { RostersRoutingModule } from './rosters-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RosterComponent } from './roster.component';

import { TankComponent } from './tank/tank.component';
import { DpsComponent } from './dps/dps.component';
import { HealComponent } from './heal/heal.component';


@NgModule({
    declarations: [
        RosterComponent,
        TankComponent,
        DpsComponent,
        HealComponent,
    ],
    imports: [
        SharedModule,
        RostersRoutingModule,

    ]
})
export class RostersModule { }
