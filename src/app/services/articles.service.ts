import { Injectable } from '@angular/core';

interface Article {
  title: string;
  img: string;
  description: string;
  plus: string;
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  firstArticle: Article;

  articles1: Article[] = [];
  articles2: Article[] = [];
  articles3: Article[] = [];

  survey: string = '';

  constructor() {

    this.survey = "1er-Mai : êtes-vous choqué par le fait que Raphaël Glucksmann ait été empêché de manifester par des militants pro-palestiniens ?";

    this.firstArticle = {
      title: "«Vos amis à vous, ce sont les mollahs!» : Éric Dupond-Moretti attaque Manuel Bompard",
      img: "https://placehold.co/720x350/163860/FFFFFF?text=PIC+1",
      description: "FOTO - Manuel Bompard a interpellé le gouvernement alors que les Insoumises Mathilde Panot et Rima Hassan étaient entendues ce matin dans les locaux de la police judiciaire dans le cadre d'enquêtes pour «apologie du terrorisme».",
      plus: "Convocation pour apologie du terrorisme : Mathilde Panot dénonce «un abus de pouvoir» qui «souille» la France",
    }

    this.articles1 = [
      {
        title: "Auteur de la «Trilogie new-yorkaise», le romancier américain Paul Auster est mort à l'âge de 77 ans",
        img: "https://placehold.co/720x400/163860/FFFFFF?text=PIC+2",
        description: "L’auteur était atteint d’un cancer. Parmi ses autres œuvres à succès figurent notamment «Moon Palace», «Le Livre des illusions» et «Brooklyn Follies».",
        plus: "Baumgartner, de Paul Auster: bonjour tristesse",
      },
      {
        title: "États-Unis : s’il est élu, Trump nommera un «procureur spécial» pour poursuivre Biden",
        img: "https://picsum.photos/720/390",
        description: "Dans un entretien fleuve au magazine Time, l’ancien président américain a estimé que son successeur s’était rendu coupable de «nombreux crimes» dont il devrait répondre devant la justice.",
        plus: "Déportations de migrants, femmes sous surveillance... Ce que serait un second mandat de Trump, selon le «Time»",
      }
    ]

  }

}
