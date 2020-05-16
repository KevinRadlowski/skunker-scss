import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../paneladmin/services/custom-validators';
import { Membre } from 'src/app/core/modeles/membre';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';

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

  disableHerboristeUn = false;
  disableHerboristeDeux = false;
  disableDepecageUn = false;
  disableDepecageDeux = false;
  disableMineurUn = false;
  disableMineurDeux = false;
  disableEnchanteurUn = false;
  disableEnchanteurDeux = false;
  disableTdcUn = false;
  disableTdcDeux = false;
  disableCouturierUn = false;
  disableCouturierDeux = false;
  disableIngeUn = false;
  disableIngeDeux = false;
  disableForgeUn = false;
  disableForgeDeux = false;
  disableAlchiUn = false;
  disableAlchiDeux = false;

  disableNiveauMetierUn = false;
  disableNiveauMetierDeux = false;

  depecage = false;

  playerName: string;

  constructor(
    private token: TokenStorageService,
    private auth: AuthService,
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

  ngOnInit() {
    this.isAdmin();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        username: [
          null,
          Validators.compose([Validators.required])
        ],
        race: [
          null,
          Validators.compose([Validators.required])
        ],
        specialisation: [
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
        lvlPremierMetier: null,
        lvlSecondMetier: null,
        email: [
          null,
          Validators.compose([Validators.email, Validators.required])
        ],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // Vérifie si le mot de passe contient un chiffre
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // Vérifie si le mot de passe contient une lettre majuscule
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // Vérifie si le mot de passe contient une lettre minuscule
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // Vérifie que le mot de passe contient bien au minimum 6 caractères
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
    this.auth.createUser(membre)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          this.router.navigate(['../login']);
          setTimeout(() => {
            this.alertService.success('Merci de t\'être enregistré ' + membre.username + ', tu peux utiliser le site !', true);
          });
        },
        error => {
          this.loading = false;
        });

  }

  selectHomme() {
    this.selectedHomme = true;
    this.selectedFemme = false;
  }

  selectFemme() {
    this.selectedFemme = true;
    this.selectedHomme = false;
  }

  choiceAucunUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = true;
  }
  choiceAucunDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = true;
  }

  choiceDepecageUn() {
    this.disableDepecageDeux = true;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceDepecageDeux() {
    this.disableDepecageUn = true;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceHerboUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = true;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceHerboDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = true;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceMineurUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = true;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceMineurDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = true;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceTdcUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = true;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceTdcDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = true;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceCouturierUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = true;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceCouturierDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = true;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceEnchantUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = true;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceEnchantDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = true;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceAlchiUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = true;
    this.disableNiveauMetierUn = false;
  }
  choiceAlchiDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = false;
    this.disableAlchiUn = true;
    this.disableNiveauMetierDeux = false;
  }

  choiceForgeUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = false;
    this.disableForgeDeux = true;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceForgeDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = false;
    this.disableForgeUn = true;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
  }

  choiceIngeUn() {
    this.disableDepecageDeux = false;
    this.disableHerboristeDeux = false;
    this.disableMineurDeux = false;
    this.disableEnchanteurDeux = false;
    this.disableTdcDeux = false;
    this.disableCouturierDeux = false;
    this.disableIngeDeux = true;
    this.disableForgeDeux = false;
    this.disableAlchiDeux = false;
    this.disableNiveauMetierUn = false;
  }
  choiceIngeDeux() {
    this.disableDepecageUn = false;
    this.disableHerboristeUn = false;
    this.disableMineurUn = false;
    this.disableEnchanteurUn = false;
    this.disableTdcUn = false;
    this.disableCouturierUn = false;
    this.disableIngeUn = true;
    this.disableForgeUn = false;
    this.disableAlchiUn = false;
    this.disableNiveauMetierDeux = false;
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
}
