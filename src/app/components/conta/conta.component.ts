import { Component, OnInit, Input } from '@angular/core';
import { Conta } from 'src/app/controllers/conta';

@Component({
	selector: 'app-conta',
	templateUrl: './conta.component.html',
	styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

	@Input('conta') conta: Conta;

	stConta:any[] = Conta.stConta;
	tpConta:any[] = Conta.tpConta;

	constructor() { }

	ngOnInit() {

	}

}
