import { Component } from '@angular/core';
import {ArticlesService} from "../../services/articles.service";
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {

  constructor(public articlesService: ArticlesService, public cursorService: CursorService) {}

}
