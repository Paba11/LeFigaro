import { Component } from '@angular/core';
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public cursorService: CursorService) {}

}
