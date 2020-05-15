import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PanelAdminService } from '../services/paneladmin.service';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-accueil-admin',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss']
})
export class AccueilPage implements OnInit {
  public discordForm: FormGroup;
  public discordLink: any;

  constructor(
    private formBuilder: FormBuilder,
    private panelAdminService: PanelAdminService,
  ) { }

  ngOnInit() {
    this.initForm();

    this.panelAdminService.getDiscordLink(1).pipe(
      tap(data => {
        console.log(data);
        this.discordLink = data;
        this.discordForm.setValue({
          discord: this.discordLink.discord,
        })

        console.log(this.discordForm.value);
      }),
      take(1),
    ).subscribe();
  }

  initForm() {
    this.discordForm = this.formBuilder.group({
      discord: [
        null,
        Validators.required
      ],
    });
  }

  onSubmit() {
    console.log(this.discordForm.value)
    this.panelAdminService.updateDiscordLink(this.discordForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
