import { Component, OnInit } from '@angular/core';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { RosterMembre } from 'src/app/paneladmin/models/Roster.model';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-dps',
  templateUrl: './dps.component.html',
  styleUrls: ['./dps.component.scss']
})
export class DpsComponent implements OnInit {
  dpsMemberList: RosterMembre[];
  rogueMembers: RosterMembre[];
  demoMembers: RosterMembre[];
  huntMembers: RosterMembre[];
  mageMembers: RosterMembre[];
  warMembers: RosterMembre[];
  chamMembers: RosterMembre[];
  constructor(
    private panelAdminService: PanelAdminService,
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
      }),
      take(1),
    ).subscribe();
  }

}
