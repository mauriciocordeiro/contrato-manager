import { Component, OnInit, NgZone } from '@angular/core';
import { Contrato } from 'src/app/controllers/contrato';
import { ContratoServices } from 'src/app/controllers/contrato.services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { EmpresaServices } from 'src/app/controllers/empresa.services';
import { Empresa } from 'src/app/controllers/empresa';

@Component({
	selector: 'app-contrato-form',
	templateUrl: './contrato-form.component.html',
	styleUrls: ['./contrato-form.component.scss']
})
export class ContratoFormComponent implements OnInit {

	idContrato = null;

	empresas: Empresa[];

	tpContrato: any[] = Contrato.tpContrato;
	prestacao: any[] = Contrato.prestacao;
	stContrato: any[] = Contrato.stContrato;

	contratoForm: FormGroup;

	constructor(
		public formBuilder: FormBuilder,
		private router: Router,
		private actRoute: ActivatedRoute,
		private snackBar: MatSnackBar,
		private contratoServices: ContratoServices,
		private empresaServices: EmpresaServices
	) {

		const idContrato = this.actRoute.snapshot.paramMap.get('id');
		if (idContrato) {
			this.loadContrato(idContrato);
		}
	}

	ngOnInit() {
		this.loadEmpresas();

		this.buildForm();
	}

	loadContrato(id) {
		this.contratoServices.read(id).subscribe(response => {
			if (response) {
				this.buildForm(response);
				this.idContrato = id;
			}
		});
	}

	buildForm(contrato?: Contrato) {
		if (!contrato) {
			this.idContrato = null;
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
			observacoes_contrato: [contrato.observacoes_contrato],
			aditivo: [contrato.aditivo],
			conta: [contrato.conta]
		});

		setTimeout(_ => {
			if(this.idContrato) {
				this.empresas.forEach(element => {
					if(element._id == contrato.empresa._id_empresa) {
						this.contratoForm.patchValue({empresa: element});
					}
				});			
			}
		}, 300);
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

		if(this.idContrato) {
			this.contratoServices.update(this.idContrato, contrato)
				.subscribe(response => {
					this.snackBar.open('Salvo com sucesso!', 'OK', {
						duration: 3000,
						panelClass: ['success-snackbar']
					});
	
				});
		} else {
			this.contratoServices.create(contrato)
			.subscribe(result => {
				this.snackBar.open('Salvo com sucesso!', 'OK', {
					duration: 3000,
					panelClass: ['success-snackbar']
				});
				this.buildForm();
			});
		}
	}

	cancel() {
		this.buildForm();
	}


	onClickAddConta() {
		this.contratoForm.value.conta.push({})
	}
}
