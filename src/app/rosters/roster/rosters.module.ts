import { NgModule } from '@angular/core';

import { RostersRoutingModule } from './rosters-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RosterComponent } from './roster.component';


@NgModule({
    declarations: [
        RosterComponent,
    ],
    imports: [
        SharedModule,
        RostersRoutingModule,

    ]
})
export class RostersModule { }
