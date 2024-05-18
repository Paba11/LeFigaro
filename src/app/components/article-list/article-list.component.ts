import {Component, HostListener} from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  isSmall: boolean = false;

  constructor(public articleService: ArticlesService, public cursorService: CursorService) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 991 && window.innerWidth >= 768;
    console.log(this.isSmall);
  }
}
