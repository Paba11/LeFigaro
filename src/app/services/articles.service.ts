import { Injectable } from '@angular/core';

interface Gallery {
  title: string;
  images: string[];
}

interface Card {
  img: string;
  description: string;
  bottom: string;
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

interface ArticleList {
  title: string;
  img: string;
  description: string[];
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
  cardList: Card[] = [];
  articleList: ArticleList[] = [];
  sideArticles: SmallArticle[] = [];

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
        title: "Phasellus iaculis justo tortor, non laoreet felis posuere. Aliquam non turpis.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+1"]
      },
      {
        title: "Suspendisse elementum, lacus vitae gravida finibus, neque sapien rutrum dolor.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+2"]
      },
      {
        title: "In cursus lacus sed scelerisque sagittis. Phasellus eget eleifend erat, vitae.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+3"]
      },
      {
        title: "Nulla tempor enim ex, sed rhoncus tellus semper a. Vivamus lacinia eget mauris.",
        images: ["https://placehold.co/400X300/163860/FFFFFF?text=VIDEOGALLERY+4"]
      },
    ];

    this.cardList = [
      {
        img: "https://placehold.co/400X200/163860/FFFFFF?text=CARDPIC+1",
        description: "Praesent condimentum elit neque. Curabitur sit amet mattis lectus, sed cursus neque. Praesent sagittis urna a elit interdum fermentum.",
        bottom: "Méedias-France",
      },
      {
        img: "https://placehold.co/400X200/163860/FFFFFF?text=CARDPIC+2",
        description: "Morbi malesuada eu ligula id vulputate. In vitae lacus et quam condimentum faucibus sit amet ut lacus.",
        bottom: "Méedia-Start",
      },
      {
        img: "https://placehold.co/400X200/163860/FFFFFF?text=CARDPIC+3",
        description: "Curabitur laoreet dui libero, quis pharetra mauris vestibulum ut. Fusce semper elit non tincidunt sodales.",
        bottom: "Médias-France",
      },
      {
        img: "https://placehold.co/400X200/163860/FFFFFF?text=CARDPIC+4",
        description: "Nunc a turpis dolor. Phasellus est neque, pretium nec urna non, semper sollicitudin lectus.",
        bottom: "Le Figaro Services",
      },

    ];

    this.articleList = [
      {
        title: "Politique",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+1",
        description: ["Phasellus auctor ante sed suscipit pulvinar. Duis placerat malesuada porta.", "Ut urna nulla, sagittis et elit quis, imperdiet commodo erat. Pellentesque interdum bibendum ligula vel blandit",
        "Aliquam varius elit orci, et dapibus est facilisis gravida", "Sed feugiat sollicitudin nunc ullamcorper elementum. Mauris sed placerat tortor"],
      },
      {
        title: "International",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+2",
        description: ["Nunc a tellus ac nisl facilisis iaculis. Ut aliquam odio nec nisl porta imperdiet", "Quisque euismod orci id lacus aliquet laoreet. Donec ultricies placerat nunc, vel ornare tortor varius nec",
        "Curabitur purus ligula, pellentesque et posuere quis, aliquam in erat", "Duis enim leo, facilisis eget auctor vel, consectetur sed tortor. Donec aliquam nec nibh vitae sodales"],
      },
      {
        title: "Société",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+3",
        description: ["Nam nec odio dui. Sed ante felis, porta in molestie et, ultrices ut enim", "Phasellus at facilisis tortor, eu vestibulum quam. Etiam id commodo mauris. Phasellus ac nulla tortor",
        "Vivamus felis turpis, fermentum quis varius quis, rhoncus nec sem", "Aliquam accumsan mi ac est pulvinar ultrices. Nulla facilisi. In finibus dui at euismod facilisis"],
      },
      {
        title: "Èconomie",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+4",
        description: ["Nullam consequat nulla at rhoncus rhoncus", "Maecenas aliquet magna scelerisque luctus vehicula. Vestibulum eu tincidunt justo",
        "Fusce eget dui fringilla, lobortis erat at, ullamcorper nibh. Vestibulum id dictum quam", "Nunc consectetur feugiat nisi at suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"],
      },
      {
        title: "Sport",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+5",
        description: ["Phasellus auctor ante sed suscipit pulvinar. Duis placerat malesuada porta.", "Ut urna nulla, sagittis et elit quis, imperdiet commodo erat. Pellentesque interdum bibendum ligula vel blandit",
          "Aliquam varius elit orci, et dapibus est facilisis gravida", "Sed feugiat sollicitudin nunc ullamcorper elementum. Mauris sed placerat tortor"],
      },
      {
        title: "FigaroVox",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+6",
        description: ["Nunc a tellus ac nisl facilisis iaculis. Ut aliquam odio nec nisl porta imperdiet", "Quisque euismod orci id lacus aliquet laoreet. Donec ultricies placerat nunc, vel ornare tortor varius nec",
          "Curabitur purus ligula, pellentesque et posuere quis, aliquam in erat", "Duis enim leo, facilisis eget auctor vel, consectetur sed tortor. Donec aliquam nec nibh vitae sodales"],
      },
      {
        title: "Voyage",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+7",
        description: ["Nam nec odio dui. Sed ante felis, porta in molestie et, ultrices ut enim", "Phasellus at facilisis tortor, eu vestibulum quam. Etiam id commodo mauris. Phasellus ac nulla tortor",
          "Vivamus felis turpis, fermentum quis varius quis, rhoncus nec sem", "Aliquam accumsan mi ac est pulvinar ultrices. Nulla facilisi. In finibus dui at euismod facilisis"],
      },
      {
        title: "Madame Figaro",
        img: "https://placehold.co/400X200/163860/FFFFFF?text=ARTICLE+LIST+8",
        description: ["Nullam consequat nulla at rhoncus rhoncus", "Maecenas aliquet magna scelerisque luctus vehicula. Vestibulum eu tincidunt justo",
          "Fusce eget dui fringilla, lobortis erat at, ullamcorper nibh. Vestibulum id dictum quam", "Nunc consectetur feugiat nisi at suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus"],
      }
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
