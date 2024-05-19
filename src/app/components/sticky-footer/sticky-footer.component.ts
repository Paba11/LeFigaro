import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-sticky-footer',
  templateUrl: './sticky-footer.component.html',
  styleUrl: './sticky-footer.component.css'
})
export class StickyFooterComponent {

  isSmall: boolean = false;

  constructor() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 768;
  }
}
