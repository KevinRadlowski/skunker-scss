import { NgModule } from '@angular/core';

import { MatPaginatorIntl } from '@angular/material';
import { getFrenchPaginatorIntl } from './shared/french-paginator-intl';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { LOCALE_ID } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { AccueilModule } from './accueil/accueil.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { AuthentificationModule } from './core/authentification/shared/authentification.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    AccueilModule,
    BlogModule,
    SharedModule,
    AuthentificationModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: MatPaginatorIntl, useValue: getFrenchPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
