import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'leFigaro';
  isHeadVisible: boolean = true;
  lastScrollTop: number = 0;
  navbarHeight: number = 300;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.navbarHeight) {
      // Scrolling down
      this.isHeadVisible = false;
    } else {
      // Scrolling up
      this.isHeadVisible = true;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
