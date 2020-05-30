// tslint:disable: one-line
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuardOfficier implements CanActivate {

    info: any;
    isMembre = false;
    isOfficier = false;
    isAdmin = false;

    constructor(private router: Router, private token: TokenStorageService) { }

    isLoggedOfficier() {
        this.info = {
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        if (this.info.authorities == 'ROLE_OFFICER') {
            this.isMembre = true;
            this.isOfficier = true;
            return true;
        }
        else { return false; }


    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.isLoggedOfficier() === true) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        else {
            this.router.navigate(['/non-connecte']);
        }

    }

}
