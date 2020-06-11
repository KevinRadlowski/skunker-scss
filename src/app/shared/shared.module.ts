import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { ShareButtonsModule } from '@ngx-share/buttons';
import { AppRoutingModule } from '../app-routing.module';
import { AlertComponent } from './alert/alert.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { EnConstructionComponent } from './en-construction/en-construction.component';
import { BypassHtmlSecurity } from './functions/bypass-html-security';
import { MaterialModule } from './material.module';
import { PageNonConnecte } from './page-non-connecte/page-non-connecte.page';
import { ConfirmationDialogService } from './services/confirmation-dialog.service';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@NgModule({
  declarations: [
    AlertComponent,
    EnConstructionComponent,
    BypassHtmlSecurity,
    ConfirmationDialogComponent,
    PageNonConnecte,
    DetailsModalComponent,
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
    GallerizeModule,
    PageNonConnecte,
  ],
  providers: [
    ConfirmationDialogService,

  ],
  entryComponents: [
    ConfirmationDialogComponent,
    DetailsModalComponent
  ],
})
export class SharedModule { }
