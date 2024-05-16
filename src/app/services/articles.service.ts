import { Injectable } from '@angular/core';

interface Gallery {
  title: string;
  images: string[];
}
interface Video {
  title: string;
  video: string;
  logo: string;
  id: number,
}

interface Article {
  title: string;
  img: string;
  description: string;
  plus: string;
}

interface SmallArticle {
  title: string;
  description: string;
  img: string;
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  firstArticle: Article;

  articles: Article[] = [];
  smallArticles: SmallArticle[] = [];
  videoArticles: Video[] = [];
  photoGallery: Gallery;
  videoGallery: Gallery[] = [];
  sideArticles: SmallArticle[] = []

  survey: string = '';

  getSideArticles(): SmallArticle[] {
    return this.sideArticles;
  }

  constructor() {

    this.survey = "Phasellus sed eleifend risus. Morbi metus metus, cursus non bibendum at, posuere vitae felis?";

    this.firstArticle = {
      title: "«Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      img: "https://placehold.co/720x350/163860/FFFFFF?text=ARTICLE+IMG+1",
      description: "FOTO - Nunc eu mauris ut nulla iaculis luctus. Vestibulum facilisis, magna at iaculis ornare, lacus ante tristique tellus, nec molestie est sem et lacus. Vivamus et orci mauris. Sed eget egestas sem. Curabitur non.",
      plus: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    }

    this.articles = [
      {
        title: "Nam vulputate convallis orci, non elementum augue tempus quis. Nullam ut nulla id lacus dapibus porttitor in a orci.",
        img: "https://placehold.co/720x400/163860/FFFFFF?text=ARTICLE+IMG+2",
        description: "Nullam vitae eleifend tortor, sit amet mollis nisl. Vestibulum molestie bibendum tellus id dictum. Aenean mollis imperdiet augue, eu pretium est sodales ac.",
        plus: "Phasellus tincidunt ultricies augue vitae lobortis.",
      },
      {
        title: "Aliquam feugiat convallis finibus. Donec fermentum massa molestie lorem viverra pharetra",
        img: "https://placehold.co/720x400/163860/FFFFFF?text=ARTICLE+IMG+3",
        description: "In lobortis, felis nec blandit egestas, mauris odio porttitor lorem, eget porttitor magna massa non felis. Sed vitae sapien dignissim quam pretium faucibus ullamcorper condimentum ante.",
        plus: "Sed congue libero eget lacus porttitor, quis fringilla urna scelerisque.",
      }
    ];

    this.smallArticles = [
      {
        title: "Aliquam tincidunt vulputate odio eget egestas. Nunc sed odio vitae felis tincidunt dapibus",
        img: "https://placehold.co/250X150/163860/FFFFFF?text=ARTICLE+IMG+4",
        description: "Nunc quis lobortis eros. In lobortis at leo non sagittis. Pellentesque imperdiet erat id efficitur posuere. Quisque eu ornare dolor. Sed scelerisque varius luctus. Cras eu quam at quam congue laoreet.",
      },
      {
        title: "Donec fermentum massa molestie lorem viverra pharetra",
        img: "https://placehold.co/250X150/163860/FFFFFF?text=ARTICLE+IMG+5",
        description: "Duis molestie elit non bibendum facilisis. Cras placerat rhoncus malesuada. Nunc hendrerit auctor quam, eu aliquet metus pretium sit amet. Maecenas pretium sem vel odio euismod, ut iaculis nulla ultrices.",
      }
    ];

    this.videoArticles = [
      {
        title: "In ultrices ultrices nisl, eu gravida elit sagittis tristique",
        video: "assets/videos/videoTV.mp4",
        logo: "assets/images/TV.png",
        id: 1,
      },
      {
        title: "Donec id eros tincidunt, varius leo eget, efficitur felis",
        video: "assets/videos/live.mp4",
        logo: "assets/images/LIVE.png",
        id: 2,
      }
    ];

    this.photoGallery = {
        title: "Curabitur vestibulum faucibus metus dictum tincidunt",
        images: [
          "https://placehold.co/180X150/163860/FFFFFF?text=PHOTOGALLERY+1",
          "https://placehold.co/340X150/163860/FFFFFF?text=PHOTOGALLERY+2",
          "https://placehold.co/550X200/163860/FFFFFF?text=PHOTOGALLERY+3"
        ]
    };

    this.videoGallery = [
      {
        title: "Phasellus iaculis justo tortor, non laoreet felis posuere ut. Aliquam non turpis et leo varius bibendum.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+1"]
      },
      {
        title: "Suspendisse elementum, lacus vitae gravida finibus, neque sapien rutrum dolor.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+2"]
      },
      {
        title: "In cursus lacus sed scelerisque sagittis. Phasellus eget eleifend erat, vitae condimentum mauris.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+3"]
      },
      {
        title: "Nulla tempor enim ex, sed rhoncus tellus semper a. Vivamus lacinia mi eget mauris cursus.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+4"]
      },
    ]

    this.sideArticles = [
      {title: "TRIBUNE", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+1" },
      {title: "SONDAGE", description: "Consectetur adipiscing elit. Sed dapibus velit non lectus consectetur.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+2" },
      {title: "MÈTÈO", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+3" },
      {title: "CHRONIQUE", description: "Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+4" },
      {title: "NOS CONSEILS", description: "Lorem ipsum dolor sit amet, porttitor nisi sit amet. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+5" },
      {title: "CULTURE", description: "Aliquam vitae pretium urna, consectetur adipiscing elit. Sed dapibus velit non lectus consectetur, sit amet pretium quam pellentesque. Suspendisse.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+6" },
      {title: "MADAME", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+7" },
      {title: "L'EDITORIAL", description: "Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+8" },
      {title: "VOYAGE", description: "Lorem ipsum dolor sit amet, Aliquam vitae pretium urna. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+9" },
      {title: "LE FIGARO LA NUIT", description: "Maecenas id magna risus, consectetur adipiscing elit. Vestibulum tellus mauris, iaculis volutpat erat eget.", img: "https://placehold.co/300X150/163860/FFFFFF?text=SIDE+ARTICLE+IMG+10" },
    ];
  }

}
