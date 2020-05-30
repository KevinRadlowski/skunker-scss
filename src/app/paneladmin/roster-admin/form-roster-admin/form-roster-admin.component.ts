import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/alert.service';
import { RosterMembre } from '../../models/Roster.model';
import { PanelAdminService } from '../../services/paneladmin.service';

@Component({
  selector: 'app-form-roster-admin',
  templateUrl: './form-roster-admin.component.html',
  styleUrls: ['./form-roster-admin.component.scss']
})
export class FormRosterAdminComponent implements OnInit, OnDestroy {
  private eventsSubscription: Subscription;
  rosterForm: FormGroup;
  rosterMembre: RosterMembre;
  loading = false;
  submitted = false;
  classeImg = '/assets/img/class/';
  @Output() memberAdded = new EventEmitter<string>();
  @Input() memberId: Observable<number>;
  membreId: number;

  constructor(
    private formBuilder: FormBuilder,
    private paneladminService: PanelAdminService,
    private alertService: AlertService,
  ) {
    this.rosterForm = this.initForm();
  }

  ngOnInit() {
    this.eventsSubscription = this.memberId.subscribe((id) => { this.membreId = id, this.updateForm(id); });
    this.initForm();
    // console.log(this.membreId);
    // console.log(this.memberId);
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  initForm(id?): FormGroup {
    return this.formBuilder.group({
      id: [
        null,
      ],
      pseudo: [
        null,
        Validators.required
      ],
      grade: [
        null,
        Validators.required
      ],
      classe: [
        null,
        Validators.required
      ],
      role: [
        null,
        Validators.required
      ],
      img: [
        null,
      ],
      deletable: [
        1,
        Validators.required
      ],
    });
  }

  updateForm(id) {
    this.paneladminService.getRosterMember(id).subscribe((data: RosterMembre) => {
      // console.log(data);
      this.rosterMembre = data;
      this.rosterForm.patchValue({
        pseudo: this.rosterMembre.pseudo,
        grade: this.rosterMembre.grade,
        classe: this.rosterMembre.classe,
        role: this.rosterMembre.role,
      });
    });
  }

  onSubmit(formData: any) {
    this.submitted = true;
    if (this.rosterForm.invalid) {
      return;
    }

    this.controlRoleAndClass();

    this.paneladminService.postRosterMember(this.rosterForm.value)
      .subscribe(data => {
        // console.log(data);
        this.memberAdded.emit('Membre ajouté à la liste!');
        this.loading = true;
        this.alertService.success('Le membre a été ajouté à la liste du roster.', true);
      }, error => console.log(error));

    this.resetForm();

  }

  editRosterMembreSubmit() {
    this.submitted = true;
    if (this.rosterForm.invalid) {
      return;
    }

    this.controlRoleAndClass();

    this.paneladminService.updateRosterMember(this.rosterMembre.id, this.rosterForm.value)
      .subscribe(data => {
        // console.log(data);
        this.memberAdded.emit('Membre édité avec succès!');
        this.loading = true;
        this.alertService.success('Le membre a bien été modifié.', true);
      }, error => console.log(error));

    this.membreId = null;
    this.resetForm();
  }


  resetForm() {
    setTimeout(() => {
      this.membreId = null;
      this.loading = false;
      this.rosterForm.reset();

      Object.keys(this.rosterForm.controls).forEach(key => {
        this.rosterForm.get(key).setErrors(null);
      });
    }, 100);
  }


  controlRoleAndClass() {
    switch (this.rosterForm.value.role) {
      case 'dps':
        switch (this.rosterForm.value.classe) {
          case 'chaman':
            this.rosterForm.value.img = this.classeImg.concat('chaman.jpg');
            break;
          case 'chasseur':
            this.rosterForm.value.img = this.classeImg.concat('hunt.jpg');
            break;
          case 'demoniste':
            this.rosterForm.value.img = this.classeImg.concat('demoniste.jpg');
            break;
          case 'druide':
            this.rosterForm.value.img = this.classeImg.concat('druid.jpg');
            break;
          case 'guerrier':
            this.rosterForm.value.img = this.classeImg.concat('warrior.jpg');
            break;
          case 'mage':
            this.rosterForm.value.img = this.classeImg.concat('mage.jpg');
            break;
          case 'pretre':
            this.rosterForm.value.img = this.classeImg.concat('priest.jpg');
            break;
          case 'voleur':
            this.rosterForm.value.img = this.classeImg.concat('rogue.jpg');
            break;
        }
        break;
      case 'tank':
        switch (this.rosterForm.value.classe) {
          case 'druide':
            this.rosterForm.value.img = this.classeImg.concat('druidferal.png');
            break;
          case 'guerrier':
            this.rosterForm.value.img = this.classeImg.concat('warprot.png');
            break;
        }
        break;
      case 'heal':
        switch (this.rosterForm.value.classe) {
          case 'chaman':
            this.rosterForm.value.img = this.classeImg.concat('chamheal.png');
            break;
          case 'druide':
            this.rosterForm.value.img = this.classeImg.concat('druidheal.png');
            break;
          case 'pretre':
            this.rosterForm.value.img = this.classeImg.concat('priest.jpg');
            break;
        }
        break;
      default:
        console.log('No role and class selected !');
        break;
    }
  }



}
