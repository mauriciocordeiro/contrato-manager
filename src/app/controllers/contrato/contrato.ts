import { EmpresaInterface } from '../empresa/empresa.interface';
import { TipoContratoInterface } from '../tipo-contrato/tipo-contrato.interface';
import { PrestacaoInterface } from '../prestacao/prestacao.interface';
import { StatusContratoInterface } from '../status-contrato/status-contrato.interface';
import { UsuarioInterface } from '../usuario/usuaio.interface';
import { Aditivo } from '../aditivo/aditivo';
import { ContaInterface } from '../conta/conta.interface';

export class Contrato {
    _id: String;
    empresa: EmpresaInterface;
    copia_contrato: any;
    tipo_contrato: TipoContratoInterface;
    prestacao: PrestacaoInterface;
    status_contrato: StatusContratoInterface;
    valor_contrato: Number;
    data_celebracao_contrato: Date;
    data_finalizacao_contrato: Date;
    observacoes_contrato: String;
    usuario: UsuarioInterface;
    aditivo: Array<Aditivo>;
    conta: Array<ContaInterface>;

}