import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-if',
  templateUrl: './diretiva-ng-if.component.html',
  styleUrls: ['./diretiva-ng-if.component.scss']
})
export class DiretivaNgIfComponent {

  numero:number = 0;

  containerAmarelo:boolean = false;
  containerVermelho:boolean = false;

  public clickAmarelo(){
    this.containerAmarelo = !this.containerAmarelo;
  }
  public clickVermelho(){
    this.containerVermelho = !this.containerVermelho;
  }

}
