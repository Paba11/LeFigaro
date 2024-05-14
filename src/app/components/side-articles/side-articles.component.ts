import { Component } from '@angular/core';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-side-articles',
  templateUrl: './side-articles.component.html',
  styleUrl: './side-articles.component.css'
})
export class SideArticlesComponent {

  articles: {title: string, description: string, img: string}[] = [];

  getBorderStyle(index: number): any {
    return index === this.articles.length - 1 ? {'border-bottom': 'none'} : {};
  }

  constructor(private articleService: ArticlesService) {
    this.articles = articleService.getSideArticles();
  }
}
