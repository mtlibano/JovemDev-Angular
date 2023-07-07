import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-class',
  templateUrl: './diretiva-ng-class.component.html',
  styleUrls: ['./diretiva-ng-class.component.scss']
})
export class DiretivaNgClassComponent implements OnInit {
  
  public valor:boolean = true;

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
    }, 1000);
  }

}