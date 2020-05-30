import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { EnConstructionComponent } from './en-construction/en-construction.component';

import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BypassHtmlSecurity } from './bypass-html-security';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AlertComponent,
    EnConstructionComponent,
    BypassHtmlSecurity,
    ConfirmationDialogComponent,
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
    GalleryModule,
    LightboxModule,
    GallerizeModule
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
    AppRoutingModule,
    AlertComponent,
    EnConstructionComponent,
    BypassHtmlSecurity,
    GalleryModule,
    LightboxModule,
    GallerizeModule
  ],
  providers: [
    ConfirmationDialogService
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
})
export class SharedModule { }
