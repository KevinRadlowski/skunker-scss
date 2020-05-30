import { Component, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../shared/global-events-manager';

@Component({
  selector: 'app-panelmembre',
  templateUrl: './panelmembre.component.html',
  styleUrls: ['./panelmembre.component.scss']
})
export class PanelmembreComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  info: any;
  isInfo = false;
  isAdmin = false;
  showNavBar = false;
  creerArticleLink = './dkp';
  listeArticlesLink = './rosters';
  @ViewChild(MatSidenav) snav: MatSidenav;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    // private token: TokenStorageService,
    private globalEventsManager: GlobalEventsManager,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {

      this.showNavBar = mode;
    });

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
