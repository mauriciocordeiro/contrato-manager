import { Empresa } from '../empresa/empresa';
import { TipoContrato } from '../tipo-contrato/tipo-contrato';
import { Prestacao } from '../prestacao/prestacao';
import { StatusContrato } from '../status-contrato/status-contrato';

export class DataFake {

    public static empresas: Empresa[] = [
        {
            bairro: "", cnpj: "00000000111", cidade: "VITÒRIDA DA CONQUISTA", contratos: [], nome_fantasia: "Empresa 001",
            email: "", num: 0, razao_social: "", rua: "", telefones: ["", ""], uf: "BA"
        }
    ];

    public static tipoContrato: TipoContrato[] = [
        { _id: '0001', tipo_contrato: 'Licitatório' },
        { _id: '0002', tipo_contrato: 'Permanente' },
        { _id: '0003', tipo_contrato: 'Construtora' }
    ];

    public static prestacao: Prestacao[] = [
        { _id: '0001', prestacao: 'Produto' },
        { _id: '0002', prestacao: 'Serviço' }
    ];

    public static statusContrato: StatusContrato[] = [
        { _id: '0001', status_contrato: 'Ativo' },
        { _id: '0002', status_contrato: 'Finalizado' },
        { _id: '0003', status_contrato: 'Cancelado' }
    ];
}