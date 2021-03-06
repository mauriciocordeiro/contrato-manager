import { Component, OnInit, NgZone } from '@angular/core';
import { Contrato } from 'src/app/controllers/contrato';
import { ContratoServices } from 'src/app/controllers/contrato.services';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar, MatDialog } from '@angular/material';
import { EmpresaServices } from 'src/app/controllers/empresa.services';
import { Empresa } from 'src/app/controllers/empresa';
import { ContaComponent } from '../conta/conta.component';
import { ContaFormComponent } from '../conta-form/conta-form.component';
import { Conta } from 'src/app/controllers/conta';
import { AditivoFormComponent } from '../aditivo-form/aditivo-form.component';

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
		private actRoute: ActivatedRoute,
		private snackBar: MatSnackBar,
		private contratoServices: ContratoServices,
		private empresaServices: EmpresaServices,
		public dialog: MatDialog
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
			_id_empresa: [contrato._id_empresa, [Validators.required]],
			copia_contrato: [contrato.copia_contrato],
			tipo_contrato: [contrato.tipo_contrato, [Validators.required]],
			prestacao: [contrato.prestacao, [Validators.required]],
			status_contrato: [contrato.status_contrato, [Validators.required]],
			valor_contrato: [contrato.valor_contrato],
			data_celebracao_contrato: [contrato.data_celebracao_contrato, [Validators.required]],
			data_finalizacao_contrato: [contrato.data_finalizacao_contrato],
			observacoes_contrato: [contrato.observacoes_contrato],
			aditivos: [contrato.aditivo],
			contas: [contrato.conta]
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

		if (this.idContrato) {
			this.contratoServices.update(this.idContrato, contrato)
				.subscribe(response => {
					this.snackBar.open('Salvo com sucesso!', 'OK', {
						duration: 3000,
						panelClass: ['success-snackbar']
					});

				});
		} else {
			this.contratoServices.readAll().subscribe(list => {

				if (list && (list as []).length > 0) {
					contrato._id = (list as Array<any>)[(list as Array<any>).length - 1]._id + 1;
				} else {
					contrato._id = 1;
				}


				this.contratoServices.create(contrato)
					.subscribe(result => {
						this.snackBar.open('Salvo com sucesso!', 'OK', {
							duration: 3000,
							panelClass: ['success-snackbar']
						});
						this.buildForm();
					});
			});
		}
	}

	cancel() {
		this.buildForm();
	}


	addConta() {
		const dialogRef = this.dialog.open(ContaFormComponent, 
			{ width:'50%', height: '50%' });
	}

	addAditivo() {
		const dialogRef = this.dialog.open(AditivoFormComponent, 
			{ width:'50%', height: '50%' });
	}
}
