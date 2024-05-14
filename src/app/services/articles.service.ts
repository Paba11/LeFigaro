import { Injectable } from '@angular/core';

interface Article {
  title: string;
  img: string;
  description: string;
  plus: string;
}

interface sideArticle {
  title: string;
  description: string;
  img: string;
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  firstArticle: Article;

  articles1: Article[] = [];
  articles2: Article[] = [];
  articles3: Article[] = [];
  sideArticles: sideArticle[] = []

  survey: string = '';

  getSideArticles(): sideArticle[] {
    return this.sideArticles;
  }

  constructor() {

    this.survey = "Phasellus sed eleifend risus. Morbi metus metus, cursus non bibendum at, posuere vitae felis?";

    this.firstArticle = {
      title: "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      img: "https://placehold.co/720x350/163860/FFFFFF?text=PIC+1",
      description: "FOTO - Nunc eu mauris ut nulla iaculis luctus. Vestibulum facilisis, magna at iaculis ornare, lacus ante tristique tellus, nec molestie est sem et lacus. Vivamus et orci mauris. Sed eget egestas sem. Curabitur non.",
      plus: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    }

    this.articles1 = [
      {
        title: "Nam vulputate convallis orci, non elementum augue tempus quis. Nullam ut nulla id lacus dapibus porttitor in a orci.",
        img: "https://placehold.co/720x400/163860/FFFFFF?text=PIC+2",
        description: "Nullam vitae eleifend tortor, sit amet mollis nisl. Vestibulum molestie bibendum tellus id dictum. Aenean mollis imperdiet augue, eu pretium est sodales ac.",
        plus: "Phasellus tincidunt ultricies augue vitae lobortis.",
      },
      {
        title: "États-Unis : s’il est élu, Trump nommera un «procureur spécial» pour poursuivre Biden",
        img: "https://placehold.co/720x400/163860/FFFFFF?text=PIC+3",
        description: "In lobortis, felis nec blandit egestas, mauris odio porttitor lorem, eget porttitor magna massa non felis. Sed vitae sapien dignissim quam pretium faucibus ullamcorper condimentum ante.",
        plus: "Sed congue libero eget lacus porttitor, quis fringilla urna scelerisque.",
      }
    ]

    this.sideArticles = [
      {title: "TRIBUNE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+1" },
      {title: "SONDAGE", description: "Consectetur adipiscing elit. Sed dapibus velit non lectus consectetur.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+2" },
      {title: "MÈTÈO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+3" },
      {title: "CHRONIQUE", description: "Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+4" },
      {title: "NOS CONSEILS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+5" },
      {title: "CULTURE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+6" },
      {title: "MADAME", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+7" },
      {title: "L'EDITORIAL", description: "Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+8" },
      {title: "VOYAGE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+9" },
      {title: "LE FIGARO LA NUIT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+10" },
      {title: "LE CLUB POLITIQUE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+11" }
    ]
  }

}
