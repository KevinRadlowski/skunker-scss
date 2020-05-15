import { Component, OnInit } from '@angular/core';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.scss']
})
export class CandidatureComponent implements OnInit {
  discordLink: any;

  constructor(
    private panelAdminService: PanelAdminService,

  ) { }

  ngOnInit() {

    this.panelAdminService.getDiscordLink(1).pipe(
      tap(data => {
        this.discordLink = data;
      }),
      take(1),
    ).subscribe();
  }

}
