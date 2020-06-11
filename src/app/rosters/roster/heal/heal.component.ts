import { Component, OnInit, Input } from '@angular/core';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { RosterMembre } from 'src/app/paneladmin/models/Roster.model';
import { tap, take } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailsModalComponent } from 'src/app/shared/details-modal/details-modal.component';
import { Membre } from 'src/app/paneladmin/models/Membre.model';

@Component({
  selector: 'app-heal',
  templateUrl: './heal.component.html',
  styleUrls: ['./heal.component.scss']
})
export class HealComponent implements OnInit {
  @Input() isAdmin = false;
  @Input() isMembre = true;
  @Input() isOfficier = false;
  @Input() membres: Membre[];

  combinedPriestMemberArray = [];
  combinedDruidMemberArray = [];
  combinedChamMemberArray = [];
  healMemberList: RosterMembre[];
  priestMembers;
  chamanMembers;
  druidMembers;

  constructor(
    private panelAdminService: PanelAdminService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.panelAdminService.getRosterMemberList().pipe(
      tap((playerList: RosterMembre[]) => {
        this.healMemberList = playerList.filter(player => player.role === 'heal').sort((a, b) => (a.pseudo < b.pseudo) ? -1 : (a.pseudo > b.pseudo) ? 1 : 0);
        this.priestMembers = this.healMemberList.filter(player => player.classe === 'pretre');
        this.chamanMembers = this.healMemberList.filter(player => player.classe === 'chaman');
        this.druidMembers = this.healMemberList.filter(player => player.classe === 'druide');
        this.checkIfPriestIsRegistred()
        this.checkIfDroodIsRegistred()
        this.checkIfChamIsRegistred()
      }),
      take(1),
    ).subscribe();
  }

  checkIfPriestIsRegistred() {
    for (const player of this.priestMembers) {
      this.combinedPriestMemberArray.push({
        ...player,
        ...(this.membres.find((itmInner) => itmInner.pseudo === player.pseudo))
      })
    }
  }

  checkIfDroodIsRegistred() {
    for (const druid of this.druidMembers) {
      this.combinedDruidMemberArray.push({
        ...druid,
        ...(this.membres.find((itmInner) => itmInner.pseudo === druid.pseudo))
      })
    }
  }
  checkIfChamIsRegistred() {
    for (const chaman of this.chamanMembers) {
      this.combinedChamMemberArray.push({
        ...chaman,
        ...(this.membres.find((itmInner) => itmInner.pseudo === chaman.pseudo))
      })
    }
  }

  openDetails(membre) {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.membre = membre;
}

}
