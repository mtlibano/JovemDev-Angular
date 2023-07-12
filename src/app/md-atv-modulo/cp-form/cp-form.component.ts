import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from '../services/cadastro-service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit {

  public qt: number = 0;
  public nomeMed: string = "";
  public valorMed: number = 0;
  public medicamentos: any = [];

  constructor(private service: CadastroServiceService) {}

  public addItem(nome: string, valor: string) {
    return this.service.addMedicamento(nome, parseInt(valor));
  }

  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res,
      error: (err: number) => this.qt = 0,     
    });

    this.service.emitNome.subscribe((nome: string) => {
      this.nomeMed = nome;
    });
  
    this.service.emitValor.subscribe((valor: number) => {
      this.valorMed = valor;
    });

  }

}