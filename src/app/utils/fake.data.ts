export class FakeData {

    public static empresas: any[] = [
        {
            bairro: "", cnpj: "00000000111", cidade: "VITÒRIDA DA CONQUISTA", contratos: [], nome_fantasia: "Empresa 001",
            email: "", num: 0, razao_social: "", rua: "", telefones: ["", ""], uf: "BA"
        }
    ];

    public static tipoContrato: any[] = [
        { _id: '0001', tipo_contrato: 'Licitatório' },
        { _id: '0002', tipo_contrato: 'Permanente' },
        { _id: '0003', tipo_contrato: 'Construtora' }
    ];

    public static prestacao: any[] = [
        { _id: '0001', prestacao: 'Produto' },
        { _id: '0002', prestacao: 'Serviço' }
    ];

    public static statusContrato: any[] = [
        { _id: '0001', status_contrato: 'Ativo' },
        { _id: '0002', status_contrato: 'Finalizado' },
        { _id: '0003', status_contrato: 'Cancelado' }
    ];
}