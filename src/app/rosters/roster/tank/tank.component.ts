import { Component, OnInit } from '@angular/core';
import { RosterMembre } from 'src/app/paneladmin/models/Roster.model';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  tankMemberList: RosterMembre[];
  warMembers;
  druidMembers;
  constructor(
    private panelAdminService: PanelAdminService,
  ) { }

  ngOnInit() {
    this.panelAdminService.getRosterMemberList().pipe(
      tap((playerList: RosterMembre[]) => {
        this.tankMemberList = playerList.filter(player => player.role === 'tank').sort((a, b) => (a.pseudo < b.pseudo) ? -1 : (a.pseudo > b.pseudo) ? 1 : 0);
        this.warMembers = this.tankMemberList.filter(player => player.classe === 'guerrier');
        this.druidMembers = this.tankMemberList.filter(player => player.classe === 'druide');
      }),
      take(1),
    ).subscribe();
  }

}
