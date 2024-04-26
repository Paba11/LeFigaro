import {Component, HostListener} from '@angular/core';
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isToggled: boolean = false;

  constructor(public cursorService: CursorService) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if(window.innerWidth <= 1023) {
      this.isToggled = true;
    }
    else this.isToggled = false;
  }

}
