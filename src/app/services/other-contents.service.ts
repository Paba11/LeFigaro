import { Injectable } from '@angular/core';

interface Section {
  title: string;
  services: string[];
}

@Injectable({
  providedIn: 'root'
})
export class OtherContentsService {

  sections: Section[] = []

  constructor() {
    this.sections = [
      {
        title: "L'actualité à ne pas manquer",
        services: ["Résultats des élections", "Covid-19", "Guerre en Ukraine", "Tension Iran-Etats Unis", "Corée-Du-Nord", "Actualité et réseaux sociaux"],
      },
      {
        title: "Programme TV",
        services: ["Tv ce soir", "Programme TV en ce moment", "Programme Tv TNT", "Séries Netflix, HBO, OCS et TV", "Programme TV Canalsat", "Actu people"],
      },
      {
        title: "Sport",
        services: ["Calendriers et résultat des match en direct", "Euro 2024", "Jeux olimpiques", "Actualité cyclisme", "Classment Ligue 1", "Transferts football"],
      },
      {
        title: "Madame",
        services: ["Horoscope du jour", "Guide du mariage", "Recettes de cusine", "Brigitte Macron", "Actu mode", "Gainer son corps"],
      },
      {
        title: "Santé",
        services: ["Résultats des élections", "Covid-19", "Guerre en Ukraine", "Tension Iran-Etats Unis", "Corée-Du-Nord", "Actualité et réseaux sociaux"],
      },
      {
        title: "Guide d'achat",
        services: ["Tv ce soir", "Programme TV en ce moment", "Programme Tv TNT", "Séries Netflix, HBO, OCS et TV", "Programme TV Canalsat", "Actu people"],
      },
      {
        title: "Èducation et orientation",
        services: ["Calendriers et résultat des match en direct", "Euro 2024", "Jeux olimpiques", "Actualité cyclisme", "Classment Ligue 1", "Transferts football"],
      },
      {
        title: "Culture",
        services: ["Horoscope du jour", "Guide du mariage", "Recettes de cusine", "Brigitte Macron", "Actu mode", "Gainer son corps"],
      }
    ];
  }

}
