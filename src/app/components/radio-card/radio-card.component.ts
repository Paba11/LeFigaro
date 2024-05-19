import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-radio-card',
  templateUrl: './radio-card.component.html',
  styleUrl: './radio-card.component.css'
})
export class RadioCardComponent {

  isSmall: boolean = true;

  constructor() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 1250;
  }

}
