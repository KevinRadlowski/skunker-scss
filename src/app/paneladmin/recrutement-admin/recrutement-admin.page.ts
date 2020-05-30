// tslint:disable: component-class-suffix
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanelAdminService } from '../services/paneladmin.service';
import { tap, take } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/alert.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-recrutement-admin',
  templateUrl: './recrutement-admin.page.html',
  styleUrls: ['./recrutement-admin.page.scss']
})

export class RecrutementAdminPage implements OnInit {
  public recrutementForm: FormGroup;
  public recrutement: any;
  public loading = false;
  public classes = [
    { label: 'chaman', img: '/assets/img/class/chaman.jpg', name: 'Chaman' },
    { label: 'chasseur', img: '/assets/img/class/hunt.jpg', name: 'Chasseur' },
    { label: 'demoniste', img: '/assets/img/class/demoniste.jpg', name: 'Démoniste' },
    { label: 'druide', img: '/assets/img/class/druid.jpg', name: 'Druide' },
    { label: 'guerrier', img: '/assets/img/class/warrior.jpg', name: 'Guerrier' },
    { label: 'mage', img: '/assets/img/class/mage.jpg', name: 'Mage' },
    { label: 'pretre', img: '/assets/img/class/priest.jpg', name: 'Prêtre' },
    { label: 'voleur', img: '/assets/img/class/rogue.jpg', name: 'Voleur' },
  ];


  constructor(
    private formBuilder: FormBuilder,
    private panelAdminService: PanelAdminService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.initForm();

    this.panelAdminService.getRecrutementValues(1).pipe(
      tap(
        (data) => {
          console.log(data);
          this.recrutement = data;
          this.recrutementForm.setValue({
            chaman: this.recrutement.chaman,
            chasseur: this.recrutement.chasseur,
            demoniste: this.recrutement.demoniste,
            druide: this.recrutement.druide,
            guerrier: this.recrutement.guerrier,
            mage: this.recrutement.mage,
            pretre: this.recrutement.pretre,
            voleur: this.recrutement.voleur,
          });
        },
        (error: HttpErrorResponse) => {
          this.alertService.error('Impossible de récupérer les informations du formulaire.', true);
        }),
      take(1),
    ).subscribe();
  }

  initForm() {
    this.recrutementForm = this.formBuilder.group({
      chaman: [null, Validators.required],
      chasseur: [null, Validators.required],
      demoniste: [null, Validators.required],
      druide: [null, Validators.required],
      guerrier: [null, Validators.required],
      mage: [null, Validators.required],
      pretre: [null, Validators.required],
      voleur: [null, Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;
    this.panelAdminService.updateRecrutementValues(this.recrutementForm.value).subscribe(
      (data) => {
        this.loading = false;
        this.alertService.success('Formulaire de recrutement mis à jour.', true);
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        this.alertService.error('Impossible de mettre à jour le formulaire.', true);
      }
    );
  }

}
