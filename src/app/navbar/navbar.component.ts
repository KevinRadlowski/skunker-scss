      // tslint:disable: quotemark
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TokenStorageService } from '../core/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {

  info: any;
  isInfo = false;
  isAdmin = false;
  isMembre = false;
  isOfficier = false;

  constructor(
    public dialog: MatDialog,
    private token: TokenStorageService
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
      if (this.info.username !== '' && this.info.username != null) { this.isInfo = true; }
      else { this.isInfo = false; }

      if (this.info.authorities[0] === "ROLE_MEMBRE") { this.isMembre = true; }
      else { this.isMembre = false; }

      if (this.info.authorities[0] === "ROLE_OFFICIER") { this.isOfficier = true; }
      else { this.isOfficier = false; }

      if (this.info.authorities[0] === "ROLE_ADMIN") { this.isAdmin = true; }
      else { this.isAdmin = false; }
    }, 100);
  }

  ngOnInit() {
    this.login();
  }

  ngDoCheck() {
    this.login();
  }
}
