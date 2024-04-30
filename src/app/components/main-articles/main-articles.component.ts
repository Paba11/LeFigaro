import { Component } from '@angular/core';

interface Article {
  title: string;
  img: string;
  description: string;
  plus: string;
}

@Component({
  selector: 'app-main-articles',
  templateUrl: './main-articles.component.html',
  styleUrl: './main-articles.component.css'
})
export class MainArticlesComponent {

  articles1: Article[] = [];
  articles2: Article[] = [];
  articles3: Article[] = [];

  constructor() {

    this.articles1 = [
      { title: "«Vos amis à vous, ce sont les mollahs!» : Éric Dupond-Moretti attaque Manuel Bompard",
        img: "https://picsum.photos/450/250",
        description: "FOTO - Manuel Bompard a interpellé le gouvernement alors que les Insoumises Mathilde Panot et Rima Hassan étaient entendues ce matin dans les locaux de la police judiciaire dans le cadre d'enquêtes pour «apologie du terrorisme».",
        plus: "Convocation pour apologie du terrorisme : Mathilde Panot dénonce «un abus de pouvoir» qui «souille» la France", }
    ]

  }


}
