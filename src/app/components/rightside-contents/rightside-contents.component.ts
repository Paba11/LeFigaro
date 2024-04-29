import { Component } from '@angular/core';
import {CursorService} from "../../services/cursor.service";

@Component({
  selector: 'app-rightside-contents',
  templateUrl: './rightside-contents.component.html',
  styleUrl: './rightside-contents.component.css'
})
export class RightsideContentsComponent {

  articles: {time: string, title: string}[] = [];

  constructor(public cursorService: CursorService) {
    this.articles = [
      { time: '17:38', title: 'Articolo iniziale: news sulla Francia e sul mondo' },
      { time: '09:20', title: 'Scoperte scientifiche rivoluzionarie: cosa cambieranno per il futuro' },
      { time: '13:45', title: 'Nuove rivelazioni sul caso politico: implicazioni inaspettate' },
      { time: '10:55', title: 'Sport: risultati sorprendenti e prossime partite da non perdere' },
      { time: '16:10', title: 'Economia globale: nuove previsioni sconvolgono i mercati finanziari' },
      { time: '11:30', title: 'Cultura e spettacolo: eventi da non perdere questo fine settimana' },
      { time: '15:15', title: 'Salute e benessere: scoperte mediche rivoluzionarie per combattere le malattie' },
      { time: '14:05', title: 'Ambiente e sostenibilità: nuove iniziative per proteggere il pianeta' },
      { time: '08:50', title: 'Tecnologia: ultime innovazioni e prossime frontiere da esplorare' },
      { time: '12:25', title: 'Educazione e istruzione: iniziative per migliorare apprendimento' },
      { time: '18:20', title: 'Viaggi e turismo: destinazioni da scoprire e esperienze indimenticabili' }
    ]

  }


}
