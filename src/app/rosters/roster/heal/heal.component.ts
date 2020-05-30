import { Component, OnInit } from '@angular/core';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { RosterMembre } from 'src/app/paneladmin/models/Roster.model';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-heal',
  templateUrl: './heal.component.html',
  styleUrls: ['./heal.component.scss']
})
export class HealComponent implements OnInit {
  healMemberList: RosterMembre[];
  priestMembers;
  chamanMembers;
  druidMembers;

  constructor(
    private panelAdminService: PanelAdminService,
  ) { }

  ngOnInit() {
    this.panelAdminService.getRosterMemberList().pipe(
      tap((playerList: RosterMembre[]) => {
        this.healMemberList = playerList.filter(player => player.role === 'heal').sort((a, b) => (a.pseudo < b.pseudo) ? -1 : (a.pseudo > b.pseudo) ? 1 : 0);
        this.priestMembers = this.healMemberList.filter(player => player.classe === 'pretre');
        this.chamanMembers = this.healMemberList.filter(player => player.classe === 'chaman');
        this.druidMembers = this.healMemberList.filter(player => player.classe === 'druide');
      }),
      take(1),
    ).subscribe();
  }

}
