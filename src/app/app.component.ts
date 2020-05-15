import { Component, HostListener, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngth';

  isShow: boolean;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('fr');
    const browserLang = this.translate.getBrowserLang();
    translate.use(browserLang);
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
