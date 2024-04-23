import { Component } from '@angular/core';
import {CursorService} from "../../services/cursor.service";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgStyle

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isDropDown: boolean = false;
  isToggled: boolean = false;
  constructor(public cursorService: CursorService) {
  }
  dropdown() {
    this.isDropDown = !this.isDropDown;
  }
  //Aggiungere un windowService per controllare quando viene effettuato il toggle
}
