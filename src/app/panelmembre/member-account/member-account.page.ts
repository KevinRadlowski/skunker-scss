import { Component, OnInit, OnChanges } from '@angular/core';
import { MembreService } from 'src/app/shared/services/membre.service';
import { Membre } from 'src/app/paneladmin/models/Membre.model';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';

@Component({
    selector: 'app-member-account',
    templateUrl: './member-account.page.html',
    styleUrls: ['./member-account.page.scss']
})
export class MembreAccountPage implements OnInit, OnChanges {
    username: string;
    membre: Membre;
    showUpdateForm = false;
    showPasswordForm = false;

    constructor(
        private token: TokenStorageService,
        private membreService: MembreService,
    ) { }

    ngOnInit() {
        this.reloadData();
    }

    ngOnChanges(changes) {
        console.log('test');
    }

    reloadData() {
        this.username = this.token.getUsername();
        this.membreService
          .getMembre(this.username)
          .subscribe((data: Membre) => {
              console.log(data);
            this.membre = data;
          },
            error => console.log("Une erreur est survenue."));
      }

      toggleUpdateForm() {
        this.showUpdateForm = !this.showUpdateForm;
      }

      togglePasswordForm() {
          this.showPasswordForm = !this.showPasswordForm;
      }

}
