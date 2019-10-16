import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { RouterModule } from '@angular/router';

import { ConnexionComponent } from '../connexion/connexion.component';
import { FormConnexionComponent } from '../connexion/form-connexion/form-connexion.component';
import { SocialConnexionComponent } from '../connexion/social-connexion/social-connexion.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import { FormInscriptionComponent } from '../inscription/form-inscription/form-inscription.component';
import { SocialInscriptionComponent } from '../inscription/social-inscription/social-inscription.component';
import { ModalInscriptionComponent } from '../inscription/modal-inscription/modal-inscription.component';
import { ModalConnexionComponent } from '../connexion/modal-connexion/modal-connexion.component';
@NgModule({
    declarations: [
        ConnexionComponent,
        FormConnexionComponent,
        SocialConnexionComponent,
        InscriptionComponent,
        FormInscriptionComponent,
        SocialInscriptionComponent,
        ModalInscriptionComponent,
        ModalConnexionComponent
    ],
    entryComponents: [
        ModalConnexionComponent,
        ModalInscriptionComponent,

    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule
    ],
    providers: [],

})
export class AuthentificationModule { }
