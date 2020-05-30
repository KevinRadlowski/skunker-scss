import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanelAdminService } from '../services/paneladmin.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-recrutement-admin',
  templateUrl: './recrutement-admin.page.html',
  styleUrls: ['./recrutement-admin.page.scss']
})
export class RecrutementAdminPage implements OnInit {
  public recrutementForm: FormGroup;
  public recrutement: any;
  public classes = [
    { label: 'chaman', img: '/assets/img/class/chaman.jpg', name: 'Chaman' },
    { label: 'chasseur', img: '/assets/img/class/hunt.jpg', name: 'Chasseur' },
    { label: 'demoniste', img: '/assets/img/class/demoniste.jpg', name: 'Démoniste' },
    { label: 'druide', img: '/assets/img/class/druid.jpg', name: 'Druide' },
    { label: 'guerrier', img: '/assets/img/class/warrior.jpg', name: 'Guerrier' },
    { label: 'mage', img: '/assets/img/class/mage.jpg', name: 'Mage' },
    { label: 'pretre', img: '/assets/img/class/priest.jpg', name: 'Prêtre' },
    { label: 'voleur', img: '/assets/img/class/rogue.jpg', name: 'Voleur' },
  ]


  constructor(
    private formBuilder: FormBuilder,
    private panelAdminService: PanelAdminService,
  ) { }

  ngOnInit() {
    this.initForm();

    this.panelAdminService.getRecrutementValues(1).pipe(
      tap(data => {
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
        })

        console.log(this.recrutementForm.value);
      }),
      take(1),
    ).subscribe();
  }

  initForm() {
    this.recrutementForm = this.formBuilder.group({
      chaman: [
        null,
        Validators.required
      ],
      chasseur: [
        null,
        Validators.required
      ],
      demoniste: [
        null,
        Validators.required
      ],
      druide: [
        null,
        Validators.required
      ],
      guerrier: [
        null,
        Validators.required
      ],
      mage: [
        null,
        Validators.required
      ],
      pretre: [
        null,
        Validators.required
      ],
      voleur: [
        null,
        Validators.required
      ],
    });
  }

  onSubmit() {
    console.log(this.recrutementForm.value)
    this.panelAdminService.updateRecrutementValues(this.recrutementForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
