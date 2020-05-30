// tslint:disable: quotemark
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenStorageService } from '../core/auth/token-storage.service';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { PanelAdminService } from '../paneladmin/services/paneladmin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  info: any;
  isInfo = false;
  isLogged = false;
  isAdmin = false;
  isMembre = false;
  isOfficier = false;
  discordLink: any;

  constructor(
    public dialog: MatDialog,
    private token: TokenStorageService,
    private router: Router,
    private panelAdminService: PanelAdminService,
  ) { }

  logout() {
    this.token.signOut();
  }

  login() {
    setTimeout(() => {
      this.info = {
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()
      };
      if (this.info.username !== '' && this.info.username != null) {
        this.isInfo = true;
      } else { this.isInfo = false; }

      if (this.info.authorities[0] !== undefined) {
        this.isLogged = true;

        if (this.info.authorities == "ROLE_ADMIN") {
          this.isAdmin = true;
        } else { this.isAdmin = false; }

        if (this.info.authorities == "ROLE_OFFICIER") {
          this.isOfficier = true;
        } else { this.isOfficier = false; }
        
        if (this.info.authorities == "ROLE_MEMBRE") {
          this.isMembre = true;
        } else { this.isMembre = false;}
      } else { this.isLogged = false; }
    }, 100);

    // console.log(this.info)
  }

  ngOnInit() {
    this.login();

    this.panelAdminService.getDiscordLink(1).pipe(
      tap(data => {
        this.discordLink = data;
      }),
      take(1),
    ).subscribe();
  }

  ngDoCheck() {
    this.login();
  }

  redirectToPanelAdmin() {
    this.router.navigate(['/paneladmin'])
  }

  redirectToPanelMembre() {
    this.router.navigate(['/membre'])
  }
}
