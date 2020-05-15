import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Raison } from '../model/raison';
import { Raid } from '../model/raid';
import { Boss } from '../model/boss';
import { RaisonService } from '../services/raison-service';

@Component({
  selector: 'app-dkpmodify',
  templateUrl: './dkpmodify.component.html',
  styleUrls: ['./dkpmodify.component.scss']
})
export class DkpmodifyComponent implements OnInit {
  isValidFormSubmitted = false;
  raisons: Raison[];
  raids: Raid[];
  boss: Boss[];
  formDkp: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private raisonService: RaisonService) { }

  ngOnInit(): void {
    this.formDkp = this.formBuilder.group({
      raison: [null, [Validators.required]],
      raid: ['', [Validators.required]],
      boss: [null, [Validators.required]]
    });
    this.raisons = this.raisonService.getRaisons();
    this.raids = this.raisonService.getRaids();
    // this.boss = this.raisonService.getBoss();
  }

  get raison() {
    return this.formDkp.get('raison');
  }
  get raid() {
    return this.formDkp.get('raid');
  }

  get f() { return this.formDkp.controls; }

  resetForm(form: FormGroup) {
    form.reset();
  }

  onFormSubmit() {
    console.log("coucou test");
    this.submitted = true;
  }


  // get boss() {
  //   return this.formDkp.get('boss');
  // }






  // formDkp: FormGroup;
  // raisons = [];
  // raids = [];
  // boss = [];

  // constructor(private formBuilder: FormBuilder) {
  //   of(this.getRaisons()).subscribe(raisons => {
  //     this.raisons = raisons;
  //   });
  // }

  // getRaisons() {
  //   return [
  //     { value: 'BonusHeure', name: 'Bonus à l\'heure' },
  //     { value: 'BossKill', name: 'Bonus de Boss Kill' },
  //     { value: 'FinRaid', name: 'Bonus d\'achèvement de raid' },
  //     { value: 'BonusFirstKill', name: 'Nouveau bonus de Boss Kill' },
  //     { value: 'CorrectionErreur', name: 'Correction d\'erreur' },
  //     { value: 'DKPAjuster', name: 'DKP Ajuster' },
  //     { value: 'Absence', name: 'Absence injustifiée' },
  //     { value: 'Autre', name: 'Autre' }
  //   ]
  // }

  // getRaids() {
  //   return [
  //     { value: 'MC', name: 'Molten Core' },
  //     { value: 'BWL', name: 'BWL' },
  //     { value: 'Onyxia', name: 'Onyxia' },
  //     { value: 'Monde', name: 'Boss de monde' },
  //   ]
  // }
  // getBossMC() {
  //   return [
  //     { value: 'Lucifron', name: 'Lucifron' },
  //     { value: 'Magmadar', name: 'Magmadar' },
  //     { value: 'Gehennas', name: 'Gehennas' },
  //     { value: 'Garr', name: 'Garr' },
  //     { value: 'Baron Geddon', name: 'Baron Geddon' },
  //     { value: 'Shazzrah', name: 'Shazzrah' },
  //     { value: 'Sulfuron', name: 'Sulfuron' },
  //     { value: 'Golemagg', name: 'Golemagg' },
  //     { value: 'Executus', name: 'Executus' },
  //     { value: 'Ragnaros', name: 'Ragnaros' },
  //   ]

  // }

  // ngOnInit() {
  //   this.formDkp = this.formBuilder.group({
  //     raison: ['', Validators.required],
  //     points: ['', Validators.required],
  //   });
  // }

}
