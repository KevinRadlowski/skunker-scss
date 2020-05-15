import { Component, OnInit } from '@angular/core';
import { PanelAdminService } from 'src/app/paneladmin/services/paneladmin.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  public recrutement: any;

  constructor(
    private panelAdminService: PanelAdminService,
  ) { }

  ngOnInit() {
    this.panelAdminService.getRecrutementValues(1).pipe(
      tap(data => {
        console.log(data);
        this.recrutement = data;
      }),
      take(1),
    ).subscribe();
  }

}
