import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursorService {

  constructor() { }

  changeCursor(cursorType: string, elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.style.cursor = cursorType;
    }
  }
}
