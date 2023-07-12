import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {

  public n1: number = 10;
  public n2: number = 15;

  public texto: string = '';

  public alteraValor() {
    if (this.n1 === 10) {
      this.n1 = 20;
      this.n2 = 25;
    } else {
      this.n1 = 10;
      this.n2 = 15;
    }
  }

  public diminuiN1() {
    this.n1--;
  }

  public alteraImg():string{
    if(this.n1 > 0 ){
      return '../../assets/images/Freakazoid.jpg';
    }
    return '../../assets/images/Freakazoid2.jpg';
  }

}