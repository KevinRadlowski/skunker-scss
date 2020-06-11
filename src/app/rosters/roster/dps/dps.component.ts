import { Component, OnInit, Input } from '@angular/core';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { RosterMembre } from 'src/app/paneladmin/models/Roster.model';
import { tap, take } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from 'src/app/shared/details-modal/details-modal.component';
import { Membre } from 'src/app/paneladmin/models/Membre.model';

@Component({
  selector: 'app-dps',
  templateUrl: './dps.component.html',
  styleUrls: ['./dps.component.scss']
})
export class DpsComponent implements OnInit {
  @Input() isAdmin = false;
  @Input() isMembre = true;
  @Input() isOfficier = false;
  @Input() membres: Membre[];

  combinedRogueMemberArray = [];
  combinedDemoMemberArray = [];
  combinedHuntMemberArray = [];
  combinedMageMemberArray = [];
  combinedWarMemberArray = [];
  combinedChamMemberArray = [];
  dpsMemberList: RosterMembre[];
  rogueMembers: RosterMembre[];
  demoMembers: RosterMembre[];
  huntMembers: RosterMembre[];
  mageMembers: RosterMembre[];
  warMembers: RosterMembre[];
  chamMembers: RosterMembre[];
  constructor(
    private panelAdminService: PanelAdminService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.panelAdminService.getRosterMemberList().pipe(
      tap((playerList: RosterMembre[]) => {
        this.dpsMemberList = playerList.filter(player => player.role === 'dps').sort((a, b) => (a.pseudo < b.pseudo) ? -1 : (a.pseudo > b.pseudo) ? 1 : 0);
        this.rogueMembers = this.dpsMemberList.filter(player => player.classe === 'voleur');
        this.demoMembers = this.dpsMemberList.filter(player => player.classe === 'demoniste');
        this.huntMembers = this.dpsMemberList.filter(player => player.classe === 'chasseur');
        this.mageMembers = this.dpsMemberList.filter(player => player.classe === 'mage');
        this.warMembers = this.dpsMemberList.filter(player => player.classe === 'guerrier');
        this.chamMembers = this.dpsMemberList.filter(player => player.classe === 'chaman');

        this.checkIfRogueIsRegistred()
        this.checkIfDemoIsRegistred()
        this.checkIfHuntIsRegistred()
        this.checkIfMageIsRegistred()
        this.checkIfWarIsRegistred()
        this.checkIfChamIsRegistred()
      }),
      take(1),
    ).subscribe();
  }

  openDetails(membre) {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.membre = membre;
  }

  checkIfRogueIsRegistred() {
    for (const player of this.rogueMembers) {
      this.combinedRogueMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

  checkIfDemoIsRegistred() {
    for (const player of this.demoMembers) {
      this.combinedDemoMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

  checkIfHuntIsRegistred() {
    for (const player of this.huntMembers) {
      this.combinedHuntMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

  checkIfMageIsRegistred() {
    for (const player of this.mageMembers) {
      this.combinedMageMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

  checkIfWarIsRegistred() {
    for (const player of this.warMembers) {
      this.combinedWarMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

  checkIfChamIsRegistred() {
    for (const player of this.chamMembers) {
      this.combinedChamMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

}
