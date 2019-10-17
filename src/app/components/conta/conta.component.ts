import { Component, OnInit, Input } from '@angular/core';
import { ContaInterface } from 'src/app/controllers/contrato';
import { Conta } from 'src/app/controllers/conta';

@Component({
	selector: 'app-conta',
	templateUrl: './conta.component.html',
	styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

	@Input('conta') conta: ContaInterface;

	stConta:any[] = Conta.stConta;
	tpConta:any[] = Conta.tpConta;

	constructor() { }

	ngOnInit() {

	}

}
