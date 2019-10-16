export class Conta {
    public _id: String = void(0);
    public _idContrato: String = void(0);
    public empresa: Empresa = void(0);
    public copia_conta: any = void(0);
    public tipo_conta: Number = void(0);
    public status_conta: Number = void(0);
    public data_vencimento_conta: Date = void(0);
    public data_recebimento_setor: Date = void(0);
    public data_envio_dof: Date = void(0);
    public valor_conta: Number = void(0);
    public observacoes_conta: any = void(0);
    public pagamento: Pagamento = void(0);
    
    constructor(){}
}

interface Empresa {
    _id: String,
    nome_fantasia: String
}

interface Pagamento {
    data_pagamento_conta: Date,
    valor_pago: Number,
    taxa_juros: Number
}