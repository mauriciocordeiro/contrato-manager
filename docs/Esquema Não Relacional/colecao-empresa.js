// ======================
// Banco de Dados CONTRATO
// ======================

// Cria o banco de dados empresa
use contrato

// Remove todos os documentos da coleção empresa
db.empresa.remove({});

// Insere um documento na coleção empresa
db.empresa.insertOne({"_id":NumberInt(1), cnpj:"11111111111111", razao_social:"Coelba Limitada", nome_fantasia:"Coelba Conquista", email:"coelba@provedor.com", "endereco":{rua:"Olívia Flores", numero:NumberInt(100), bairro:"Candeias", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"11111111"}});
db.empresa.insertOne({"_id":NumberInt(2), cnpj:"22222222222222", razao_social:"Embasa Limitada", nome_fantasia:"Embasa Conquista", email:"embasa@provedor.com", "endereco":{rua:"Pará", numero:NumberInt(200), bairro:"Ibirapuera", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"22222222"}});
db.empresa.insertOne({"_id":NumberInt(3), cnpj:"33333333333333", razao_social:"Lanchonete Teixeira", nome_fantasia:"Lanchonete Teixeira", email:"teixeirao@provedor.com", "endereco":{rua:"Siqueira Campos", numero:NumberInt(300), bairro:"Centro", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"33333333"}});
db.empresa.insertOne({"_id":NumberInt(4), cnpj:"44444444444444", razao_social:"Seguro Alunos RSA", nome_fantasia:"Seguro", email:"segurorsa@provedor.com", "endereco":{rua:"Nove de Novembro", numero:NumberInt(400), bairro:"Guarani", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"44444444"}});
db.empresa.insertOne({"_id":NumberInt(5), cnpj:"55555555555555", razao_social:"Coelba Limitada", nome_fantasia:"Coelba Tapirema", email:"coelbatapirema@provedor.com", "endereco":{rua:"Sete de Setembro", numero:NumberInt(500), bairro:"Guarani", cidade:"Tapirema", uf:"BA"}, "telefones":{ddd:"77", telefone:"55555555"}});
db.empresa.insertOne({"_id":NumberInt(6), cnpj:"66666666666666", razao_social:"Contrulita Prestadora de Serviços em Construções Empresariais SA", nome_fantasia:"Construlita ", email:"constulita@provedor.com", "endereco":{rua:"Luís Eduardo", numero:NumberInt(600), bairro:"Jurema", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"66666666"}});
db.empresa.insertOne({"_id":NumberInt(7), cnpj:"77777777777777", razao_social:"Companhia Telefônica", nome_fantasia:"Telefone", email:"oi@provedor.com", "endereco":{rua:"Brasil", numero:NumberInt(700), bairro:"Zabelê", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"77777777"}});
db.empresa.insertOne({"_id":NumberInt(8), cnpj:"88888888888888", razao_social:"GUARDSECURE", nome_fantasia:"Vigilância", email:"guardsecure@provedor.com", "endereco":{rua:"Maranhão", numero:NumberInt(800), bairro:"Esplanada do Parque", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"88888888"}});
db.empresa.insertOne({"_id":NumberInt(9), cnpj:"99999999999999", razao_social:"Correios Limitada", nome_fantasia:"Correios", email:"correios@provedor.com", "endereco":{rua:"Pampulha", numero:NumberInt(900), bairro:"Boa Vista", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"99999999"}});
db.empresa.insertOne({"_id":NumberInt(10), cnpj:"12345678912345", razao_social:"Computacion Tecnologias e Equipamentos Empresariais SA", nome_fantasia:"Computacion", email:"computacion_adm@provedor.com", "endereco":{rua:"Euclides Dantas", numero:NumberInt(1000), bairro:"Flamengo", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"99009900"}});
db.empresa.insertOne({"_id":NumberInt(11), cnpj:"10203040506070", razao_social:"Terceriza Empresa de Serviços Tercerizados Ltda", nome_fantasia:"Terceriza", email:"terceriza@provedor.com", "endereco":{rua:"Brumado", numero:NumberInt(2145), bairro:"Brasil", cidade:"Vitoria da Conquista", uf:"BA"}, "telefones":{ddd:"77", telefone:"88008800"}});



