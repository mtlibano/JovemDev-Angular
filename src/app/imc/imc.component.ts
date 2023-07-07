import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.scss']
})
export class ImcComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public nome:string = '';
  public sexo:string = '';
  public peso:number = 0;
  public altura:number = 0;
  public avaliacao:string='';

  public calcIMC():string {
    let imc = this.peso / (this.altura * this.altura);

    if (this.sexo === 'masculino') {
      if (imc < 20.7) {
          this.avaliacao =  'Abaixo do peso';
      } else if (imc <= 26.4) {
          this.avaliacao = 'Peso ideal';
      } else if (imc <= 27.8) {
          this.avaliacao = 'Pouco acima do peso';
      } else if (imc <= 31.1) {
          this.avaliacao = 'Acima do peso';
      } else if (imc > 31.2 ) {
          this.avaliacao = 'Obesidade';
      }
  } else if (this.sexo === 'feminino') {
      if (imc < 19.1) {
          this.avaliacao = 'Abaixo do peso';
      } else if (imc <= 25.8) {
          this.avaliacao = 'Peso ideal';
      } else if (imc <= 27.3) {
          this.avaliacao = 'Pouco acima do peso';
      } else if (imc <= 32.3) {
          this.avaliacao = 'Acima do peso';
      } else if (imc > 32.4 ) {
          this.avaliacao = 'Obesidade';
      }
  }
    return this.avaliacao;
  }

  public verificar():boolean {
    if (this.nome !== '' && this.peso !== 0 && this.altura !== 0) {
        return false;
    } else {
        return true;
    }
  }

}