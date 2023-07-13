import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from '../services/cadastro-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {

  public lista: any = [];

  constructor(private service: CadastroServiceService) {}

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

  clickItem(medicamento: any): void {
    this.service.getMedicamento(medicamento);
  }

  deleteItem(event: number): void {
    this.service.removeItem(event);    
  }

}