import { Contrato } from '../contrato/contrato';

export class Empresa {

    cnpj: String;
	razao_social: String;
	nome_fantasia: String;
	email: String;
	rua: String;
	num: Number;
	bairro: String;
	cidade: String;
    uf: String;
    telefones: String[];
    contratos: Contrato[]
}