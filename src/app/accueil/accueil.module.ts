import { NgModule } from '@angular/core';

import { DescriptionComponent } from './description/description.component';
import { ResumeCardsComponent } from './resume-cards/resume-cards.component';
import { ResumeCardsItemComponent } from './resume-cards/resume-cards-item/resume-cards-item.component';
import { AboutComponent } from './about/about.component';
import { AccueilComponent } from './accueil.component';

import { SharedModule } from '../shared/shared.module';
import { AccueilRoutingModule } from './accueil-routing.module';
import { CalendarComponent } from './calendar/calendar.component';


import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AccueilComponent,
    DescriptionComponent,
    ResumeCardsComponent,
    AboutComponent,
    ResumeCardsItemComponent,
    CalendarComponent
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
