import { StatusContrato } from '../status-contrato/status-contrato';
import { Usuario } from '../usuario/usuario';
import { Aditivo } from '../aditivo/aditivo';
import { Conta } from '../conta/conta';
import { Empresa } from '../empresa/empresa';
import { TipoContrato } from '../tipo-contrato/tipo-contrato';
import { Prestacao } from '../prestacao/prestacao';

export class Contrato {
    _id: String;
    empresa: Empresa;
    copia_contrato: any;
    tipo_contrato: TipoContrato;
    prestacao: Prestacao[];
    status_contrato: StatusContrato;
    valor_contrato: Number;
    data_celebracao_contrato: Date;
    data_finalizacao_contrato: Date;
    observacoes_contrato: String;
    usuario: Usuario;
    aditivo: Aditivo[];
    conta: Conta[];

    constructor() {}
}