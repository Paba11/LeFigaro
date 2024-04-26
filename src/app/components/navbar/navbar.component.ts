import {Component, HostListener} from '@angular/core';
import {CursorService} from "../../services/cursor.service";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpened: boolean = false;
  isDropDown: boolean = false;
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

  dropdown() {
    this.isDropDown = !this.isDropDown;
  }

  openMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }

}
