import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Membre } from 'src/app/paneladmin/models/Membre.model';
import { MembreService } from 'src/app/shared/services/membre.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomValidators } from 'src/app/paneladmin/services/custom-validators';

@Component({
    selector: 'app-member-account-password',
    templateUrl: './member-account-password.component.html',
    styleUrls: ['./member-account-password.component.scss']
})
export class MembreAccountPasswordComponent implements OnInit {
    @Input() membre: Membre;
    @Output() successPasswordUpdate: EventEmitter<boolean> = new EventEmitter();
    accountPasswordForm: FormGroup;
    loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private membreService: MembreService,
        private alertService: AlertService,
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.accountPasswordForm = this.formBuilder.group(
            {
                id: [
                    this.membre.id,
                ],
                username: [
                    this.membre.username,
                    Validators.required
                ],
                pseudo: [
                    this.membre.pseudo,
                    Validators.required
                ],
                email: [
                    this.membre.email,
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
                password: [
                    null,
                    Validators.compose([
                        Validators.required,
                        // check whether the entered password has a number
                        CustomValidators.patternValidator(/\d/, {
                            hasNumber: true
                        }),
                        // check whether the entered password has upper case letter
                        CustomValidators.patternValidator(/[A-Z]/, {
                            hasCapitalCase: true
                        }),
                        // check whether the entered password has a lower case letter
                        CustomValidators.patternValidator(/[a-z]/, {
                            hasSmallCase: true
                        }),
                        Validators.minLength(6)
                    ])
                ],
                confirmPassword: [null, Validators.compose([Validators.required])]
            },
            {
                validator: [CustomValidators.passwordMatchValidator]
            });
    }

    onSubmit() {
        if (this.accountPasswordForm.invalid) {
            return;
        }
        this.membreService.updateMembrePassword(this.membre.id, this.accountPasswordForm.value)
            .subscribe(
                data => {
                    this.alertService.success('Votre mot de passe a bien été modifié !', true);
                    this.successPasswordUpdate.emit(true)
                },
                error => {
                    this.alertService.error('Une erreur est servenue.', true);
                });
    }
}
