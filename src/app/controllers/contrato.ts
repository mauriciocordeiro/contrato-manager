export class Contrato {
    public _id_contrato: String = void(0);
    public numero: String = void(0);
    public empresa: Empresa = void(0);
    public copia_contrato: any = void(0);
    public tipo_contrato: Number = void(0);
    public prestacao: Number = void(0);
    public status_contrato: Number = void(0);
    public valor_contrato: Number = void(0);
    public data_celebracao_contrato: Date = void(0);
    public data_finalizacao_contrato: Date = void(0);
    public observacoes_contrato: any = void(0);
    public aditivo: Aditivo[] = void(0);
    public conta: Conta[] = void(0);
    
    constructor(){ }
}

interface Empresa {
    _id_empresa: String,
    cnpj: String,
    razao_social: String
}

interface Aditivo {
    _id: String
    copia_contrato_aditivo: any,
    valor_contrato_aditivo: any,
    data_renovacao: Date,
    data_vencimento: Date,
    observacoes: any
}

interface Conta {
    _id: String,
    tipo_conta: Number,
    status_conta: Number,
    valor_conta: Number
}