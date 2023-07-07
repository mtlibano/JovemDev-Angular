import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.scss']
})
export class DiretivaNgStyleComponent {

  progresso: number = 0;

  loading() {
    this.progresso += 10;
    if (this.progresso > 100) {
      this.progresso = 0;
    }
  }

}