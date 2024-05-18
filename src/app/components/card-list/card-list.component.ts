import { Component } from '@angular/core';
import {ArticlesService} from "../../services/articles.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  constructor(public articlesService: ArticlesService) {}

}
