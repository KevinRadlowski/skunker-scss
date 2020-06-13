import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Membre } from 'src/app/paneladmin/models/Membre.model';
import { MembreService } from 'src/app/shared/services/membre.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
    selector: 'app-member-account-form',
    templateUrl: './member-account-form.component.html',
    styleUrls: ['./member-account-form.component.scss']
})
export class MembreAccountFormComponent implements OnInit {
    @Input() membre: Membre;
    accountForm: FormGroup;
    loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private membreService: MembreService,
        private alertService: AlertService,
    ) { }

    ngOnInit() {
        console.log(this.membre)
        this.initForm();

        this.accountForm.patchValue({
            username: this.membre.username,
            email: this.membre.email,
        });
    }

    initForm(id?) {
        this.accountForm = this.formBuilder.group({
          id: [
            null,
          ],
          username: [
            null,
            Validators.required
          ],
          pseudo: [
            this.membre.username,
            Validators.required
          ],
          email: [
            null,
            Validators.required
          ],
          classe: [
            this.membre.classe,
            Validators.required
          ],
          level: [
            this.membre.level,
            Validators.required
          ],
          race: [
            this.membre.race,
            Validators.required
          ],
          premierMetier: [
            this.membre.premierMetier,
            Validators.required
          ],
          secondMetier: [
            this.membre.secondMetier,
            Validators.required
          ],
        });
      }

    onSubmit() {
        if (this.accountForm.invalid) {
          return;
        }

        this.membreService.updateMembre(this.membre.id, this.accountForm.value)
          .subscribe(data => {
              console.log(data)
            this.loading = true;
            this.alertService.success('Votre compte a bien été modifié.', true);
            window.scroll(0,0);
          }, error => this.alertService.success('ERREUR : Votre compte n\'a pas été modifié.', true));
     }
}
