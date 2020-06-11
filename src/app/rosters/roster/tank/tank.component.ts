import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { take, tap } from 'rxjs/operators';
import { Membre } from 'src/app/paneladmin/models/Membre.model';
import { RosterMembre } from 'src/app/paneladmin/models/Roster.model';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { DetailsModalComponent } from 'src/app/shared/details-modal/details-modal.component';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  @Input() isAdmin = false;
  @Input() isMembre = true;
  @Input() isOfficier = false;
  @Input() membres: Membre[];

  combinedWarMemberArray = [];
  combinedDruidMemberArray = [];
  tankMemberList: RosterMembre[];
  warMembers = [];
  druidMembers = [];

  constructor(
    private panelAdminService: PanelAdminService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.panelAdminService.getRosterMemberList().pipe(
      tap((playerList: RosterMembre[]) => {
        this.tankMemberList = playerList.filter(player =>
          player.role === 'tank').sort((a, b) => (a.pseudo < b.pseudo) ? -1 : (a.pseudo > b.pseudo) ? 1 : 0);
        this.warMembers = this.tankMemberList.filter(player => player.classe === 'guerrier');
        this.druidMembers = this.tankMemberList.filter(player => player.classe === 'druide');
        this.checkIfWarIsRegistred()
        this.checkIfDroodIsRegistred()
      }),
      take(1),
    ).subscribe();
  }

  checkIfWarIsRegistred() {
    for (const warrior of this.warMembers) {
      this.combinedWarMemberArray.push({
        ...warrior,
        ...(this.membres.find((itmInner) => itmInner.pseudo === warrior.pseudo))
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

  openDetails(membre) {
    const modalRef = this.modalService.open(DetailsModalComponent);
    modalRef.componentInstance.membre = membre;
  }

}
