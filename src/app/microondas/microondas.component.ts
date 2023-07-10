import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  public displayTime:string = '00:00';
  public selectedTime:number = 0;
  public timerInterval:any;
  public isStart:boolean = true;
  public isReset:boolean = true;
  public digitCount = 0;

  addTempo(numeros: number) {
    if (this.digitCount < 4) {
      this.selectedTime = this.selectedTime * 10 + numeros;
      this.updateDisplayTime();
      this.digitCount++;
    }
  }

  addSegundos(segundos: number) {
    if (this.selectedTime + segundos <= 90 * 60) {
      this.selectedTime += segundos;
      this.updateDisplayTime();
    }
  }

  addMinutos(minutos: number) {
    if (this.selectedTime + minutos * 60 <= 90 * 60) {
      this.selectedTime += minutos * 60;
      this.updateDisplayTime();
    }
  }

  startTimer() {
    if (this.selectedTime > 0) {
      this.isStart = false;
      this.isReset = true;
      this.timerInterval = setInterval(() => {
        this.selectedTime--;
        this.updateDisplayTime();
        if (this.selectedTime === 0) {
          clearInterval(this.timerInterval);
          this.isStart = true;
          this.isReset = true;
        }
      }, 1000);
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.selectedTime = 0;
    this.updateDisplayTime();
    this.isStart = true;
    this.isReset = true;
    this.digitCount = 0;
  }

  updateDisplayTime() {
    const minutes = Math.floor(this.selectedTime / 60);
    const seconds = this.selectedTime % 60;
    this.displayTime = `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number) {
    return num.toString().padStart(2, '0');
  }

}