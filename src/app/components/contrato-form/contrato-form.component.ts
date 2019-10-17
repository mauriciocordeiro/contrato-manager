import { Component, OnInit, NgZone } from '@angular/core';
import { Contrato } from 'src/app/controllers/contrato';
import { ContratoServices } from 'src/app/controllers/contrato.services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { EmpresaServices } from 'src/app/controllers/empresa.services';
import { Empresa } from 'src/app/controllers/empresa';

@Component({
	selector: 'app-contrato-form',
	templateUrl: './contrato-form.component.html',
	styleUrls: ['./contrato-form.component.scss']
})
export class ContratoFormComponent implements OnInit {

	empresas: Empresa[];

	tpContrato: any[] = Contrato.tpContrato;
	prestacao: any[] = Contrato.prestacao;
	stContrato: any[] = Contrato.stContrato;

	contratoForm: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
		private router: Router,
		private snackBar: MatSnackBar,
		private contratoServices: ContratoServices,
		private empresaServices: EmpresaServices
	) { }

	ngOnInit() {
		this.buildForm();

		this.loadEmpresas();
	}

	buildForm(contrato?: Contrato) {
		if (!contrato) {
			contrato = new Contrato();
		}

		this.contratoForm = this.formBuilder.group({
			numero: 					[contrato.numero, [Validators.required]],
			empresa: 					[contrato.empresa, [Validators.required]],
			copia_contrato:				[contrato.copia_contrato],
			tipo_contrato: 				[contrato.tipo_contrato, [Validators.required]],
			prestacao: 					[contrato.prestacao, [Validators.required]],
			status_contrato: 			[contrato.status_contrato, [Validators.required]],
			valor_contrato: 			[contrato.valor_contrato],
			data_celebracao_contrato: 	[contrato.data_celebracao_contrato, [Validators.required]],
			data_finalizacao_contrato:	[contrato.data_finalizacao_contrato],
			observacoes_contrato: 		[contrato.data_celebracao_contrato],
			aditivo: 			  		[contrato.aditivo],
			conta: 				  		[contrato.conta]
		});
	}

	loadEmpresas() {
		this.empresaServices.readAll().subscribe(result => {
			this.empresas = result as Empresa[];
		});
	}

	submit() {
		if (!this.contratoForm.valid) {
			Object.keys(this.contratoForm.controls).forEach(control => {
				this.contratoForm.get(control).markAsTouched();
			});
			this.snackBar.open('Existem campos inválidos.', 'OK', {
				duration: 3000,
				panelClass: ['warning-snackbar']
			});
			return;
		}

		let contrato: Contrato = this.contratoForm.value as Contrato;
		// reduce data
		contrato.empresa = {
			_id_empresa: this.contratoForm.value.empresa._id,
			cnpj: this.contratoForm.value.empresa.cnpj,
			razao_social: this.contratoForm.value.empresa.razao_social
		};

		this.contratoServices.create(contrato)
			.subscribe(result => {
				this.snackBar.open('Salvo com sucesso!', 'OK', {
					duration: 3000,
					panelClass: ['success-snackbar']
				});

				this.buildForm();

				this.router.navigate(['/']);
			});

	}

}
