import { Empresa } from '../empresa/empresa';
import { TipoConta } from '../tipo-conta/tipo-conta';
import { StatusConta } from '../status-conta/status-conta';
import { Usuario } from '../usuario/usuaio';

export class Conta {
    _id: String;
    _idContrato: String;
    empresa: Empresa;
    copia_conta: any;
    tipo_conta: TipoConta;
    status_conta: StatusConta;
    data_vencimento_conta: Date;
	data_recebimento_setor: Date;
	data_envio_dof: Date;
	data_pagamento_conta: Date;
	valor_conta: Number;
    valor_pago: Number;
    observacoes_conta: any;
    usuario: Usuario;
}