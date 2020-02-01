// tslint:disable: one-line
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class AuthGuardMembre implements CanActivate {

    info: any;
    isMembre = false;
    isOfficier = false;

    constructor(private router: Router, private token: TokenStorageService) { }

    isLoggedMembre() {
        this.info = {
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };

        if (this.info.authorities === 'ROLE_MEMBRE') { return true; }
        else { return false; }


    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.isLoggedMembre() === true) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        else {
            this.router.navigate(['/non-connecte']);
        }

    }

}
