import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSnackBar, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ContratoServices } from 'src/app/controllers/contrato.services';
import { Contrato } from 'src/app/controllers/contrato';

@Component({
	selector: 'app-contrato',
	templateUrl: './contrato.component.html',
	styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {

	prestacao: Array<any> = Contrato.prestacao;
	stContrato: Array<any> = Contrato.stContrato;
	tpContrato: Array<any> = Contrato.tpContrato;

	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	contratoData: any = [];
	dataSource: MatTableDataSource<Contrato>;
	displayedColumns: string[] = ['numero', 'empresa', 'cnpj', 'prestacao', 'status_contrato', 'valor_contrato', 'action'];

	constructor(
		private router: Router,
		private snackBar: MatSnackBar,
		private contratoServices: ContratoServices
	) { }

	ngOnInit() {

		this.loadContratos();

	}

	loadContratos() {
		this.contratoServices.readAll().subscribe(result => {
			this.contratoData = result;

			// A quick XGH don't hurts anybody
			this.contratoData.forEach(element => {
				element.empresaNome = element.empresa.razao_social,
					element.cnpj = element.empresa.cnpj,
					element.prestacaoLabel = this.prestacao[element.prestacao - 1].label
				element.statusLabel = this.stContrato[element.status_contrato - 1].label
			});

			this.dataSource = new MatTableDataSource<Contrato>(this.contratoData);
			setTimeout(() => {
				this.dataSource.paginator = this.paginator;
			}, 0);

			this.dataSource.sort = this.sort;
		});
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	deleteContrato(index, element) {
		if (window.confirm('Tem certeza?')) {
			const data = this.dataSource.data;
			data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
			this.dataSource.data = data;
			this.contratoServices.delete(element._id)
				.subscribe(response => {
					this.snackBar.open('Excluído com sucesso!', 'OK', {
						duration: 3000,
						panelClass: ['success-snackbar']
					});
				});
		}
	}

}
