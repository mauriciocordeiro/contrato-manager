const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function deleteEmpty(v) {
    if (v == null) {
        return undefined;
    }
    return v;
}

// Define collection and schema
let Contrato = new Schema(
    {
        numero: { type: String, required: true },
        empresa: { type: Object, required: true },
        copia_contrato: { type: Buffer, set: deleteEmpty },
        tipo_contrato: { type: Number, required: true },
        prestacao: { type: Number, required: true },
        status_contrato: { type: Number, required: true },
        valor_contrato: { type: Number, set: deleteEmpty },
        data_celebracao_contrato: { type: Date, required: true },
        data_finalizacao_contrato: { type: Date, set: deleteEmpty },
        observacoes_contrato: { type: String, set: deleteEmpty },
        aditivo: { type: Array, set: deleteEmpty },
        conta: { type: Array, set: deleteEmpty }
    },
    {
        collection: 'contrato'
    }
)

module.exports = mongoose.model('Contrato', Contrato)