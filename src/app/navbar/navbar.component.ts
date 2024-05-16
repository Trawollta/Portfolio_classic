import { CommonModule,   } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
// import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isMenuActive = false;
  isDesktopSize = true;

  // switchLanguage(lang: string) {
  //     this.translateService.use(lang);
  // }

  ngOnInit() {
    // this.isDesktopSize = window.innerWidth >= 700;
  }

  toggleMenu(anchorId?: string) {
    this.isMenuActive = !this.isMenuActive;

    if (this.isMenuActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
      if (anchorId) {
        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Verzögerung von 300ms
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktopSize = event.target.innerWidth >= 700;
  }

  private checkWindowSize() {
    this.isDesktopSize = window.innerWidth >= 900;
  }
}
