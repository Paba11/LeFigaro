import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-articles',
  templateUrl: './selection-articles.component.html',
  styleUrl: './selection-articles.component.css'
})
export class SelectionArticlesComponent {

  articles: {subtitle: string, title: string, description: string, img: string}[] = []

  constructor() {
    this.articles = [
      {
        subtitle: "SANTÈ",
        title: "Curabitur sit amet lacus sollicitudin ipsum.",
        description: "Phasellus sit amet sagittis sapien, blandit vehicula augue. Proin diam orci, dapibus sit amet eros sed, euismod ultrices ex. In a consequat ligula.",
        img: "https://placehold.co/300X200/163860/FFFFFF?text=SELECTION+1",
      },
      {
        subtitle: "TÈMOIGNAGES",
        title: "Aenean dolor purus, rhoncus vel semper eu, hendrerit.",
        description: "Vestibulum malesuada congue maximus. Integer sed facilisis sapien. Sed tempor nec velit ac ullamcorper. Nullam quis vehicula neque, vel interdum velit. Quisque vel lorem arcu. Mauris eget libero turpis.",
        img: "https://placehold.co/300X200/163860/FFFFFF?text=SELECTION+2",
      },
    ]
  }
}
