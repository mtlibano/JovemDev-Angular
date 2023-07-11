import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroServiceService {

  public emitEvent = new EventEmitter();

  private medicamentos: any = [
    {nome: 'Sertralina', valor: 10}
  ];

  public getLista() {
    return this.medicamentos;
  }

  public adiciona(nome: string, valor: number) {
    this.medicamentos.push(nome, valor);
    this.emitEvent.emit(this.medicamentos.length);
    return this.medicamentos;
  }

  constructor() { }

}