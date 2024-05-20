import {Component, HostListener} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  isSmall: boolean = false;

  constructor(public articlesService: ArticlesService) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 991;
  }
}
