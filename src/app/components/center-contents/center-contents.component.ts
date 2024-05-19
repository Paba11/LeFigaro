import {Component, HostListener} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-center-contents',
  templateUrl: './center-contents.component.html',
  styleUrl: './center-contents.component.css'
})
export class CenterContentsComponent {

  isSmall: boolean = false;

  constructor(public articlesService: ArticlesService) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 991 && window.innerWidth >= 768;
  }

  restartVideo(id: number) {
    const videoTV: HTMLVideoElement = document.getElementById('video' + id) as HTMLVideoElement;
    if (videoTV) {
      videoTV.currentTime = 0;
      videoTV.play();
    }
  }

}
