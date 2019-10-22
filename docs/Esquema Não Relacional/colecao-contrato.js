// ======================
// Banco de Dados CONTRATO
// ======================

// Cria o banco de dados empresa
use contrato

// Remove todos os documentos da cole��o empresa
db.contrato.remove({});

// Insere um documento na cole��o empresa
db.contrato.insertOne({_id:NumberInt(1), _id_empresa:NumberInt(9), copia_contrato:"C:\copia100.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:12357, data_celebracao:new ISODate('2016-11-02'), data_finalizacao:new ISODate('2017-11-02'), numero:NumberInt(100), "aditivo":[{copia_contrato_aditivo:"C:\copia10002.pdf", valor_contrato_aditivo:13000, data_renovacao:new ISODate('2017-11-04'), data_vencimento:new ISODate('2018-11-04')},{copia_contrato_aditivo:"C:\copia10001.pdf", valor_contrato_aditivo:12700, data_renovacao:new ISODate('2018-11-03'), data_vencimento:new ISODate('2019-11-03')}]});

db.contrato.insertOne({_id:NumberInt(2), _id_empresa:NumberInt(3), copia_contrato:"C:\copia200.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:8570, data_celebracao:new ISODate('2016-12-01'), data_finalizacao:new ISODate('2017-12-01'), observacoes:"Reclama��es por parte dos Alunos do Curso dde BSI no dia  23/10/2014", numero:NumberInt(200), "aditivo":[{copia_contrato_aditivo:"C:\copia201.pdf", valor_contrato_aditivo:9300, data_renovacao:new ISODate('2017-12-02'), data_vencimento:new ISODate('2018-12-02'), observacoes:"Foi conversado que ser� oferecido um servi�o compo para alunos de baixa renda"},{copia_contrato_aditivo:"C:\copia201.pdf", valor_contrato_aditivo:10100, data_renovacao:new ISODate('2018-12-03'), data_vencimento:new ISODate('2019-12-03')}], "conta":[{copia_conta:"C:\copia5000_01.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-05-10'), data_recebimento_setor:new ISODate('2019-05-05'), data_envio_dof:new ISODate('2019-05-06'), valor_conta:9343, _id_usuario:NumberInt(2), "pagamento":[{valor_pago:9343, taxa_juros:null, data_pagamento_conta:new ISODate('2019-05-08')}]},{copia_conta:"C:\copia5000_02.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-06-10'), data_recebimento_setor:new ISODate('2019-06-09'), data_envio_dof:new ISODate('2019-06-09'), valor_conta:8743, _id_usuario:NumberInt(2), "pagamento":[{valor_pago:8743, data_pagamento_conta:new ISODate('2019-06-10')}]}]});

db.contrato.insertOne({_id:NumberInt(3), _id_empresa:NumberInt(7), copia_contrato:"C:\copia50.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(2), valor_contrato:17400, data_celebracao:new ISODate('2016-05-16'), data_finalizacao:new ISODate('2017-05-06'), numero:NumberInt(50), "aditivo":[{copia_contrato_aditivo:"C:\copia5501.pdf", valor_contrato_aditivo:22000, data_renovacao:new ISODate('2017-05-07'), data_vencimento:new ISODate('2018-05-07')},{copia_contrato_aditivo:"C:\copia5502.pdf", valor_contrato_aditivo:23500, data_renovacao:new ISODate('2018-05-08'), data_vencimento:new ISODate('2019-05-08'), observacoes:"Foi mantido o mesmo plano, sem adicionais. Empresa n�o est� cumprindo com a garantia de servi�o de internet. Qualidade baixa."},{copia_contrato_aditivo:"C:\copia5503.pdf", valor_contrato_aditivo:31250, data_renovacao:new ISODate('2019-05-09'), data_vencimento:new ISODate('2020-05-09'), observacoes:"Aumento da largura de banda pra tentar suprir a necessidade do instituto. Ligar e dar retorno do servi�o."}], "conta":[{copia_conta:"C:\copia200_01.pdf", tipo_conta:NumberInt(1), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-06-11'), data_recebimento_setor:new ISODate('2019-06-07'), data_envio_dof:new ISODate('2019-06-07'), valor_conta:760, _id_usuario:NumberInt(2), "pagamento":[{valor_pago:760, data_pagamento_conta:new ISODate('2019-06-09')}]},{copia_conta:"C:\copia200_02.pdf", tipo_conta:NumberInt(1), status_conta:NumberInt(2),  data_vencimento:new ISODate('2019-07-11'), valor_conta:760, _id_usuario:NumberInt(1)}]});

db.contrato.insertOne({_id:NumberInt(4), _id_empresa:NumberInt(10), copia_contrato:"C:\copia3000.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(2), status_contrato:NumberInt(2), valor_contrato:8000, data_celebracao:new ISODate('2018-10-05'), data_finalizacao:new ISODate('2019-11-18'), numero:NumberInt(3000)});

db.contrato.insertOne({_id:NumberInt(5), _id_empresa:NumberInt(1), copia_contrato:"C:\copia300.pdf", tipo_contrato:NumberInt(2), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:7500, data_celebracao:new ISODate('2017-11-15'), numero:NumberInt(300),conta:[{copia_conta:"C:\copia300_01.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-05-06'), data_recebimento_setor:new ISODate('2019-05-02'), data_envio_dof:new ISODate('2019-05-02'), valor_conta:12987, _id_usuario:NumberInt(2), "pagamento":[{valor_pago:12987, taxa_juros:null, data_pagamento_conta:new ISODate('2019-09-25')}]},{copia_conta:"C:\copia300_02.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-06-06'), data_recebimento_setor:new ISODate('2019-06-05'), data_envio_dof:new ISODate('2019-06-05'), valor_conta:15321, _id_usuario:NumberInt(2), "pagamento":[{valor_pago:15321, data_pagamento_conta:new ISODate('2019-09-25')}]}, {copia_conta:"C:\copia300_03.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-07-06'), data_recebimento_setor:new ISODate('2019-07-01'), data_envio_dof:new ISODate('2019-07-04'), valor_conta:11570, _id_usuario:NumberInt(2)},{copia_conta:"C:\copia300_04.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(1),  data_vencimento:new ISODate('2019-10-25'), data_recebimento_setor:new ISODate('2019-10-21'), data_envio_dof:new ISODate('2019-10-21'), valor_conta:15321, _id_usuario:NumberInt(2)},{copia_conta:"C:\copia300_05.pdf", tipo_conta:NumberInt(2), status_conta:NumberInt(2),  data_vencimento:new ISODate('2019-10-26'), data_recebimento_setor:new ISODate('2019-10-22'), data_envio_dof:new ISODate('2019-10-22'), valor_conta:15321, _id_usuario:NumberInt(1)}]});

db.contrato.insertOne({_id:NumberInt(6), _id_empresa:NumberInt(8), copia_contrato:"C:\copia400.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(3), valor_contrato:13985, data_celebracao:new ISODate('2017-12-01'), data_finalizacao:new ISODate('2018-12-01'), numero:NumberInt(400)});

db.contrato.insertOne({_id:NumberInt(7), _id_empresa:NumberInt(2), copia_contrato:"C:\copia5000.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:3200, data_celebracao:new ISODate('2017-05-20'), numero:NumberInt(5000)});

db.contrato.insertOne({_id:NumberInt(8), _id_empresa:NumberInt(4), copia_contrato:"C:\copia123.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:20000, data_celebracao:new ISODate('2017-10-21'), numero:NumberInt(123)});

db.contrato.insertOne({_id:NumberInt(9), _id_empresa:NumberInt(6), copia_contrato:"C:\copia555.pdf", tipo_contrato:NumberInt(3), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:75890, data_celebracao:new ISODate('2017-09-21'), data_finalizacao:new ISODate('2018-09-22'), observacoes:"Houve risco de embargo na visita do Org�o fiscalizador por conta da falta de EPIs e EPCs para os funcionarios. Solucionado pela empresa.", numero:NumberInt(555), "aditivo":[{copia_contrato_aditivo:"C:\copia55501.pdf", valor_contrato_aditivo:54890, data_renovacao:new ISODate('2018-09-23'), data_vencimento:new ISODate('2019-09-23')},{copia_contrato_aditivo:"C:\copia55502.pdf", valor_contrato_aditivo:62340, data_renovacao:new ISODate('2019-09-25'), data_vencimento:new ISODate('2020-09-25')}]});

db.contrato.insertOne({_id:NumberInt(10), _id_empresa:NumberInt(5), copia_contrato:"C:\copia789.pdf", tipo_contrato:NumberInt(2), prestacao:NumberInt(1), status_contrato:NumberInt(2), valor_contrato:15000, data_celebracao:new ISODate('2017-05-08'), numero:NumberInt(789)});

db.contrato.insertOne({_id:NumberInt(11), _id_empresa:NumberInt(7), copia_contrato:"C:\copia55.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:20000, data_celebracao:new ISODate('2017-04-10'), data_finalizacao:new ISODate('2017-05-06'), numero:NumberInt(55)});

db.contrato.insertOne({_id:NumberInt(12), _id_empresa:NumberInt(11), copia_contrato:"C:\copia234.pdf", tipo_contrato:NumberInt(1), prestacao:NumberInt(1), status_contrato:NumberInt(1), valor_contrato:34580, data_celebracao:new ISODate('2017-02-03'), data_finalizacao:new ISODate('2018-02-03'), numero:NumberInt(234), "aditivo":[{copia_contrato_aditivo:"C:\copia23401.pdf", valor_contrato_aditivo:42345, data_renovacao:new ISODate('2018-02-04'), data_vencimento:new ISODate('2019-02-04'), observacoes:"Ampliou o quadro de fincion�rios em 10 pessoas"}]});
