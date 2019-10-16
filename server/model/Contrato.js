const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Contrato = new Schema (
    {
        numero: { type: Schema.Types.String },
        empresa: { type: Schema.Types.Object },
        copia_contrato: { type: Schema.Types.Mixed },
        tipo_contrato: { type: Schema.Types.Number },
        prestacao: { type: Schema.Types.Number },
        status_contrato: { type: Schema.Types.Number },
        valor_contrato: { type: Schema.Types.Decimal128 },
        data_celebracao_contrato: { type: Schema.Types.Date },
        data_finalizacao_contrato: { type: Schema.Types.Date },
        observacoes_contrato: { type: Schema.Types.Date },
        aditivo: { type: Schema.Types.Array },
        conta: { type: Schema.Types.Array }
    },
    {
        collection: 'contratos'
    }
)

module.exports = mongoose.model('Contrato', Contrato)