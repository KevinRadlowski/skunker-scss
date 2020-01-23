import { NgModule } from '@angular/core';

import { DescriptionComponent } from './description/description.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { ProgressComponent } from './progress/progress.component';
import { AccueilComponent } from './accueil.component';

import { SharedModule } from '../shared/shared.module';
import { AccueilRoutingModule } from './accueil-routing.module';
import { CalendarComponent } from './calendar/calendar.component';


import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatureComponent } from './candidature/candidature.component';

@NgModule({
  declarations: [
    AccueilComponent,
    DescriptionComponent,
    WhyUsComponent,
    ProgressComponent,
    CalendarComponent,
    CandidatureComponent
  ],
  imports: [
    SharedModule,
    AccueilRoutingModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class AccueilModule { }
