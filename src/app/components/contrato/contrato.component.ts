import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataFake } from 'src/app/controllers/utils/data.fake';
import { Empresa } from 'src/app/controllers/empresa/empresa';
import { TipoContrato } from 'src/app/controllers/tipo-contrato/tipo-contrato';
import { Prestacao } from 'src/app/controllers/prestacao/prestacao';
import { StatusContrato } from 'src/app/controllers/status-contrato/status-contrato';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {

  contratoForm: FormGroup = new FormGroup({});

  // DATAFAKE ==================================================
  empresas: Empresa[]             = DataFake.empresas;
  tipoContrato:TipoContrato[]     = DataFake.tipoContrato;
  prestacao:Prestacao[]           = DataFake.prestacao;
  statusContrato:StatusContrato[] = DataFake.statusContrato;
  // ===========================================================

  constructor() {

  }

  ngOnInit() {

  }

  submit() {

  }

}
