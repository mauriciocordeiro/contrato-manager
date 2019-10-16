export class Empresa {
    
    public _id_empresa: String = void(0);
    public cnpj: String = void(0);
    public razao_social: String = void(0);
	public nome_fantasia: String = void(0);
	public email: String = void(0);
    public endereco: Endereco = void(0);
    public telefones: Telefone[] = void(0);
    public contratos: Contrato[] = void(0);

    constructor(){}
}

interface Endereco {
    _idEndereco: String,
    rua: String,
    numero: Number,
    bairro: String,
    cidade: String,
    uf: String
}

interface Telefone {
    _id_telefone: String,
    ddd: String,
    telefone: String
}

interface Aditivo {
    _id: String,
    valor_contrato_aditivo: Number,
    data_vencimento_aditivo: Date
}

interface Contrato {
    _id: String,
    tipo_contrato: Number,	
    status_contrato: Number,
    valor_contrato: Number,
    aditivo: Aditivo[]
}