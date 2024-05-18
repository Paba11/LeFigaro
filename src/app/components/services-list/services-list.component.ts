import {Component, HostListener} from '@angular/core';
import {OtherContentsService} from "../../services/other-contents.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css'
})
export class ServicesListComponent {

  isSmall: boolean = false;

  constructor(public contentsService: OtherContentsService) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 991;
    console.log(this.isSmall);
  }

}
