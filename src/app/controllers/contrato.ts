export class Contrato {

    public static TP_LICITATORIO: Number = 1;
    public static TP_PERMANENTE: Number = 2;
    public static TP_CONSULTORIA: Number = 3;
    public static tpContrato: any[] = [
        { value: 1, label: 'Licitatório' },
        { value: 2, label: 'Permanente' },
        { value: 3, label: 'Consultoria' }
    ];

    public static ST_ATIVO: Number = 1;
    public static ST_FINALIZADO: Number = 2;
    public static ST_CANCELADO: Number = 3;
    public static stContrato: any[] = [
        { value: 1, label: 'Ativo' },
        { value: 2, label: 'Finalizado' },
        { value: 3, label: 'Cancelado' }
    ];

    public static SERVICO: Number = 1;
    public static PRODUTO: Number = 2;
    public static prestacao: any[] = [
        { value: 1, label: 'Serviço' },
        { value: 2, label: 'Produto' }
    ];

    public _id_contrato: String = void(0);
    public numero: String = void(0);
    public empresa: EmpresaInterface = void(0);
    public copia_contrato: any = void(0);
    public tipo_contrato: Number = void(0);
    public prestacao: Number = void(0);
    public status_contrato: Number = void(0);
    public valor_contrato: Number = void(0);
    public data_celebracao_contrato: Date = void(0);
    public data_finalizacao_contrato: Date = void(0);
    public observacoes_contrato: any = void(0);
    public aditivo: AditivoInterface[] = void(0);
    public conta: ContaInterface[] = void(0);
    
    constructor(){ }
}

export interface EmpresaInterface {
    _id_empresa: String,
    cnpj: String,
    razao_social: String
}

export interface AditivoInterface {
    _id: String
    copia_contrato_aditivo: any,
    valor_contrato_aditivo: any,
    data_renovacao: Date,
    data_vencimento: Date,
    observacoes: any
}

export interface ContaInterface {
    _id: String,
    tipo_conta: Number,
    status_conta: Number,
    valor_conta: Number
}