import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/token-storage.service';
import { MembreService } from 'src/app/shared/services/membre.service';
import { Membre } from 'src/app/paneladmin/models/Membre.model';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {
  info: any;
  isInfo = false;
  isLogged = false;
  isAdmin = false;
  isMembre = false;
  isOfficier = false;
  membres: Membre[];

  constructor(
    private token: TokenStorageService,
    private membreService: MembreService,
    ) { }

  ngOnInit() {
    this.getMemberList();
    this.login();
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
  }

  
  getMemberList() {

    this.membreService.getMembreList().subscribe(
      membres => this.membres = membres,
    );
}

}
