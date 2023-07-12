import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  public emitEvent = new EventEmitter();
  public emitNome = new EventEmitter();
  public emitValor = new EventEmitter();
  public nomeMed: string = "";
  public valorMed: number = 0;

  private medicamentos: any = [
    {nome: 'Sertralina', valor: 10}
  ];

  public getLista() {
    return this.medicamentos;
  }

  public addMedicamento(nome: string, valor: number) {
    let medicamento = {nome, valor}
    this.medicamentos.push(medicamento);
    this.emitEvent.emit(this.medicamentos.length);
    return this.medicamentos;
  }

  public getMedicamento(medicamento: any){
    this.nomeMed = medicamento.nome;
    this.valorMed = medicamento.valor;
    this.emitNome.emit(this.nomeMed);
    this.emitValor.emit(this.valorMed);
  }

  constructor() { }

}