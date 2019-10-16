import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CandidatureComponent } from './candidature/candidature.component';
import { PveFormComponent } from './candidature/pve-form/pve-form.component';
import { CandidatureChoiceComponent } from './candidature/candidature-choice/candidature-choice.component';
import { PvpFormComponent } from './candidature/pvp-form/pvp-form.component';
import { AlertComponent } from './alert/alert.component';

import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BypassHtmlSecurity } from './bypass-html-security';

@NgModule({
  declarations: [
    CandidatureComponent,
    CandidatureChoiceComponent,
    PveFormComponent,
    PvpFormComponent,
    AlertComponent,
    BypassHtmlSecurity
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ShareButtonsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    CandidatureComponent,
    PveFormComponent,
    PvpFormComponent,
    AppRoutingModule,
    AlertComponent,
    BypassHtmlSecurity,
  ]
})
export class SharedModule { }
