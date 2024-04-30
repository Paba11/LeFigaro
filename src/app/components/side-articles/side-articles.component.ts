import { Component } from '@angular/core';

@Component({
  selector: 'app-side-articles',
  templateUrl: './side-articles.component.html',
  styleUrl: './side-articles.component.css'
})
export class SideArticlesComponent {

  articles: {title: string, description: string, img: string}[] = [];

  constructor() {
    this.articles = [
      {title: "TRIBUNE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://picsum.photos/200/110" },
      {title: "SONDAGE", description: "Consectetur adipiscing elit. Sed dapibus velit non lectus consectetur.", img: "https://picsum.photos/200/120" },
      {title: "MÈTÈO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://picsum.photos/200/130" },
      {title: "CHRONIQUE", description: "Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://picsum.photos/200/140" },
      {title: "NOS CONSEILS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://picsum.photos/200/115" },
      {title: "CULTURE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://picsum.photos/200/155" },
      {title: "MADAME", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://picsum.photos/200/145" },
      {title: "L'EDITORIAL", description: "Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://picsum.photos/200/135" },
      {title: "VOYAGE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://picsum.photos/200/125" },
      {title: "LE FIGARO LA NUIT", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://picsum.photos/200/135" },
      {title: "LE CLUB POLITIQUE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://picsum.photos/200/100" }
    ]
  }
}
