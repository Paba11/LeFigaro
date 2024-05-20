import {Component, HostListener} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {

  isSmall: boolean = false;

  constructor(public articlesService: ArticlesService, public cursorService: CursorService) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 800;
  }
}
