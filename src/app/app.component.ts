import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leFigaro';
  isHeadVisible = true;
  lastScrollTop = 0;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > this.lastScrollTop) {
      // Scrolling down
      console.log("down");
      this.isHeadVisible = false;
    } else {
      // Scrolling up
      console.log("up");
      this.isHeadVisible = true;
    }

    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
