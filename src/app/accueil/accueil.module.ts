import { NgModule } from '@angular/core';

import { DescriptionComponent } from './description/description.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ProgressComponent } from './progress/progress.component';
import { AccueilComponent } from './accueil.component';

import { SharedModule } from '../shared/shared.module';
import { AccueilRoutingModule } from './accueil-routing.module';
import { GalleryComponent } from './gallery/gallery.component';


import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatureComponent } from './candidature/candidature.component';
import { TranslateModule } from '@ngx-translate/core';
import { MoltenCoreComponent } from './progress/molten-core/molten-core.component';
import { BlackwingLairComponent } from './progress/blackwing-lair/blackwing-lair.component';
import { AhnQirajComponent } from './progress/ahn-qiraj/ahn-qiraj.component';
import { ZulGurubComponent } from './progress/zul-gurub/zul-gurub.component';
import { OnyxiaComponent } from './progress/onyxia/onyxia.component';
import { NaxxramasComponent } from './progress/naxxramas/naxxramas.component';
import { RuinesAhnQirajComponent } from './progress/ruines-ahn-qiraj/ruines-ahn-qiraj.component';


@NgModule({
  declarations: [
    AccueilComponent,
    DescriptionComponent,
    WhyUsComponent,
    ProgressComponent,
    GalleryComponent,
    CandidatureComponent,
    MoltenCoreComponent,
    BlackwingLairComponent,
    AhnQirajComponent,
    ZulGurubComponent,
    OnyxiaComponent,
    NaxxramasComponent,
    RuinesAhnQirajComponent,
  ],
  imports: [
    SharedModule,
    AccueilRoutingModule,
    NgbModalModule,
    TranslateModule.forChild(),

    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class AccueilModule { }
