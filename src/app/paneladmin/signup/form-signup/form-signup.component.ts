import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../services/custom-validators';
import { Membre } from 'src/app/core/modeles/membre';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { first } from 'rxjs/operators';
import { MembreService } from '../../services/membre.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent implements OnInit {
  public formSignup: FormGroup;
  membre: Membre;
  loading = false;
  confirmResult = null;
  submitted = false;
  info: any;
  selectedHomme = true;
  selectedFemme = false;

  disableDruide = false;
  disableChaman = false;
  disableChasseur = false;
  disableGuerrier = false;
  disableVoleur = false;
  disablePretre = false;
  disableMage = false;
  disableDemoniste = false;

  constructor(
    private token: TokenStorageService,
    private membreService: MembreService,
    private location: Location,
    private fb: FormBuilder,
    private router: Router,
    private alertService: AlertService

  ) {
    this.formSignup = this.createSignupForm();
  }

  get f() { return this.formSignup.controls; }

  isAdmin() {
    this.info = {
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()

    };
  }


  selectHomme() {
    this.selectedHomme = true;
    this.selectedFemme = false;
  }

  selectFemme() {
    this.selectedFemme = true;
    this.selectedHomme = false;
  }

  clickTauren() {
    this.disableDruide = false;
    this.disableChaman = false;
    this.disableChasseur = false;
    this.disableGuerrier = false;
    this.disableVoleur = true;
    this.disablePretre = true;
    this.disableMage = true;
    this.disableDemoniste = true;
  }

  clickOrc() {
    this.disableDruide = true;
    this.disableChaman = false;
    this.disableChasseur = false;
    this.disableGuerrier = false;
    this.disableVoleur = false;
    this.disablePretre = true;
    this.disableMage = true;
    this.disableDemoniste = false;
  }

  clickTroll() {
    this.disableDruide = true;
    this.disableChaman = false;
    this.disableChasseur = false;
    this.disableGuerrier = false;
    this.disableVoleur = false;
    this.disablePretre = false;
    this.disableMage = false;
    this.disableDemoniste = true;
  }

  clickMortVivant() {
    this.disableDruide = true;
    this.disableChaman = true;
    this.disableChasseur = true;
    this.disableGuerrier = false;
    this.disableVoleur = false;
    this.disablePretre = false;
    this.disableMage = false;
    this.disableDemoniste = false;
  }

  ngOnInit() {
    this.isAdmin();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        pseudo: [
          null,
          Validators.compose([Validators.required])
        ],
        genre: [
          null,
          Validators.compose([Validators.required])
        ],
        race: [
          null,
          Validators.compose([Validators.required])
        ],
        classe: [
          null,
          Validators.compose([Validators.required])
        ],
        level: null,
        premierMetier: null,
        secondMetier: null,
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
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
            // check whether the entered password has a special character
            /*
             * CustomValidators.patternValidator(
             *  /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
             *  {
             *    hasSpecialCharacters: true
             *  }
             *  )
            */
            Validators.minLength(6)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])],
        confirmMail: [null, Validators.compose([Validators.email, Validators.required])
        ]
      },
      {
        // Vérifie si le mdp et l'email sont bien les mêmes
        validator: [CustomValidators.passwordMatchValidator,
        CustomValidators.mailMatchValidator]
      }
    );
  }

  retourPage() {
    this.location.back();
  }

  onSubmit() {
    this.submitted = true;
    if (this.formSignup.invalid) {
      return;
    }
    this.loading = true;
    const membre: Membre = this.formSignup.value;
    membre.username = membre.pseudo;
    this.membreService.createMembre(membre)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['../login']);
          setTimeout(() => {
            this.alertService.success('Merci de t\'être enregistré ' + membre.pseudo + ', tu peux utiliser le site !', true);
          });
        },
        error => {
          this.loading = false;
        });

  }
}
