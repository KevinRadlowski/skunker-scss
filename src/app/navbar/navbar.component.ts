import { Component } from '@angular/core';
import { ModalConnexionComponent } from '../core/authentification/connexion/modal-connexion/modal-connexion.component';
import { ModalInscriptionComponent } from '../core/authentification/inscription/modal-inscription/modal-inscription.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public dialog: MatDialog,
  ) { }

  openConnectModal(): void {
    this.dialog.open(ModalConnexionComponent);
  }

  openRegisterModal(): void {
    this.dialog.open(ModalInscriptionComponent);
  }

}
