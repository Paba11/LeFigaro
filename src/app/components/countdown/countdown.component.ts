import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent {

  leftTime: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isSmall: boolean = true;

  constructor() {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    this.isSmall = window.innerWidth <= 1300;
    console.log(this.isSmall);
  }

  ngOnInit(): void {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 6, 26, 19, 30);
    this.leftTime = (targetDate.getTime() - currentDate.getTime()) / 1000;

    setInterval(() => {
      this.leftTime -= 1;

      this.days = Math.floor(this.leftTime / (60 * 60 * 24));
      this.hours = Math.floor((this.leftTime % (60 * 60 * 24)) / (60 * 60));
      this.minutes = Math.floor((this.leftTime % (60 * 60)) / 60);
      this.seconds = Math.floor(this.leftTime % 60);
    }, 1000);
  }
}
