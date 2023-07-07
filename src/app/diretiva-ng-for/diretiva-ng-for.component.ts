import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.scss']
})
export class DiretivaNgForComponent {

  items: any[] = [
    { id: 1, name: 'Martelo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum purus at ex sagittis ultrices.' },
    { id: 2, name: 'Serrote', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum purus at ex sagittis ultrices.' },
    { id: 3, name: 'Prego', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum purus at ex sagittis ultrices.' },
    { id: 4, name: 'Parafuso', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum purus at ex sagittis ultrices.' },
    { id: 5, name: 'Parafusadeira', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum purus at ex sagittis ultrices.' }
  ];

  contador : number = 4;
  nomeSelecionado: string = "";
  idadeSelecionado: number = 0;

  public listaPessoas: any = [
    {nome: "Pessoa 1", idade: 25},
    {nome: "Pessoa 2", idade: 30},
    {nome: "Pessoa 3", idade: 55}
  ];

  public addPessoa(){
    this.listaPessoas.push({nome: 'Pessoa ' + this.contador, idade: this.contador + 30});
    this.contador ++;
    this.nomeSelecionado = '';
  }

  public removePessoa(){
    this.listaPessoas.pop();
    this.contador --;
    this.nomeSelecionado = '';
  }

  public clickPessoa(p: any){
    console.log(p);
    this.nomeSelecionado = p.nome;
    this.idadeSelecionado = p.idade;
  }

}
