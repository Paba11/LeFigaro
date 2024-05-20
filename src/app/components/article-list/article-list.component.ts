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
  additiveElement: {title: string; img: string; description: string[]};

  constructor(public articleService: ArticlesService, public cursorService: CursorService) {
    this.checkWindowSize();

    this.additiveElement = {
      title: "Partenaires",
      img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+1",
      description: ["Phasellus auctor ante sed suscipit pulvinar. Duis placerat malesuada porta.", "Ut urna nulla, sagittis et elit quis, imperdiet commodo erat. Pellentesque interdum bibendum ligula vel blandit",
        "Aliquam varius elit orci, et dapibus est facilisis gravida", "Sed feugiat sollicitudin nunc ullamcorper elementum. Mauris sed placerat tortor"],
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 991 && window.innerWidth >= 768;
  }
}
