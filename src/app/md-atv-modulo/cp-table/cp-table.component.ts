import { Component, OnInit } from '@angular/core';
import { CadastroServiceService } from '../services/cadastro-service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit {

  public lista: Array<string> = [];

  constructor(private service: CadastroServiceService) {}

  ngOnInit(): void {
    this.lista = this.service.getLista();
  }

}