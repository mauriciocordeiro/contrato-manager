import { Component, OnInit, Input } from '@angular/core';
import { Conta } from 'src/app/controllers/conta';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-conta-form',
	templateUrl: './conta-form.component.html',
	styleUrls: ['./conta-form.component.scss']
})
export class ContaFormComponent implements OnInit {

	@Input('conta') conta: Conta;
	@Input('formContrato') formContrato : FormGroup;

	stConta:any[] = Conta.stConta;
	tpConta:any[] = Conta.tpConta;

	constructor() { }

	ngOnInit() {

	}

}
