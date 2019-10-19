// ======================
// Banco de Dados CONTRATO
// ======================

// Cria o banco de dados empresa
use contrato

// Remove todos os documentos da coleção empresa
db.setor.remove({});

// Insere um documento na coleção empresa
db.setor.insertOne({_id:NumberInt(1),nome:"Fiscal", "usuarios":[{nome:"Cassio", login:"cassio", senha:"12345"}]});
db.setor.insertOne({_id:NumberInt(2),nome:"Financeiro", "usuarios":[{nome:"Ezequiel", login:"ezequias", senha:"101010"}]});
