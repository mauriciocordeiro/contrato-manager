import { Component, OnInit, NgZone } from '@angular/core';
import { FakeData } from 'src/app/utils/fake.data';
import { Contrato } from 'src/app/controllers/contrato';
import { ContratoServices } from 'src/app/controllers/contrato.services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contrato-form',
	templateUrl: './contrato-form.component.html',
	styleUrls: ['./contrato-form.component.scss']
})
export class ContratoFormComponent implements OnInit {

	// FAKEDATA ==================================================
	empresas: any[] = FakeData.empresas;
	tipoContrato: any[] = FakeData.tipoContrato;
	prestacao: any[] = FakeData.prestacao;
	statusContrato: any[] = FakeData.statusContrato;
	// ===========================================================

	constructor( 
		private router: Router,
		private services: ContratoServices
	) { }

	ngOnInit() {

	}

	submit() {
		let contrato:Contrato = new Contrato();
		contrato.numero = '0000 0001';
		contrato.status_contrato = 1;
		contrato.valor_contrato = 1000000.99;

		this.services.create(contrato)
			.subscribe(result => {
				alert(result);	
			});
	}

}
