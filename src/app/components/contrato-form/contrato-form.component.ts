import { Component, OnInit, NgZone } from '@angular/core';
import { FakeData } from 'src/app/utils/fake.data';
import { Contrato } from 'src/app/controllers/contrato';
import { ContratoServices } from 'src/app/controllers/contrato.services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-contrato-form',
	templateUrl: './contrato-form.component.html',
	styleUrls: ['./contrato-form.component.scss']
})
export class ContratoFormComponent implements OnInit {

	empresas: any[] = FakeData.empresas;

	tpContrato: any[] = Contrato.tpContrato;
	prestacao: any[] = Contrato.prestacao;
	stContrato: any[] = Contrato.stContrato;




	contratoForm:FormGroup;

	constructor( 
		public formBuilder: FormBuilder,
		private router: Router,
		private snackBar: MatSnackBar,
		private contratoServices: ContratoServices
		//private empresaServices: EmpresaServices
	) { }

	ngOnInit() {
		this.buildForm();
	}

	buildForm(contrato?:Contrato) {
		if(!contrato) {
			contrato = new Contrato();
		}

		this.contratoForm = this.formBuilder.group({
			numero: [contrato.numero, [Validators.required]],
			empresa: [contrato.empresa, [Validators.required]],
			copia_contrato: [contrato.copia_contrato],
			tipo_contrato: [contrato.tipo_contrato, [Validators.required]],
			prestacao: [contrato.prestacao, [Validators.required]],
			status_contrato: [contrato.status_contrato, [Validators.required]],
			valor_contrato: [contrato.valor_contrato],
			data_celebracao_contrato: [contrato.data_celebracao_contrato, [Validators.required]],
			data_finalizacao_contrato: [contrato.data_finalizacao_contrato],
			observacoes_contrato: [contrato.data_celebracao_contrato, [Validators.required]],
			aditivo: [contrato.aditivo],
			conta: [contrato.conta]
		});
	}

	submit() {
		if(!this.contratoForm.valid) {
			alert("Campos inválidos");
			return;
		}

		this.contratoServices.create(this.contratoForm.value)
			.subscribe( result => {
				this.snackBar.open('Salvo com sucesso!', 'OK', {
					duration: 3000,
					panelClass: ['success-snackbar']
				  });
			});
		
	}

}
