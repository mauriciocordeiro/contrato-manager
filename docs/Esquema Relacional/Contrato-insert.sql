USE gerenciamento_contratos_new;

-- INSERÇÃO DE DADOS NA TABELA Setor
INSERT INTO  Setor  (id_setor, nome) VALUES (1,'Fiscal');
INSERT INTO  Setor  (id_setor, nome) VALUES (2,'Financeiro');




















-- INSERÇÃO DE DADOS NA TABELA Usuario
INSERT INTO  Usuario  (id_usuario, nome, login, senha, id_setor) VALUES (1,'Cassio','cassio',12345,1);
INSERT INTO  Usuario  (id_usuario, nome, login, senha, id_setor) VALUES (2,'Ezequiel','ezequias',101010,2);




















-- INSERÇÃO DE DADOS NA TABELA Empresa
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (1,11111111111111,'Coelba Limitada','Coelba Conquista','coelba@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (2,22222222222222,'Embasa Limitada','Embasa Conquista','embasa@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (3,33333333333333,'Lanchonete Teixeira','Lanchonete Teixeira','teixeirao@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (4,44444444444444,'Seguro Alunos RSA','Seguro','segurorsa@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (5,55555555555555,'Coelba Limitada','Coelba Tapirema','coelbatapirema@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (6,66666666666666,'Contrulita Prestadora de Serviços em Construções Empresariais SA','Construlita ','constulita@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (7,77777777777777,'Companhia Telefônica','Telefone','oi@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (8,88888888888888,'GUARDSECURE','Vigilância','guardsecure@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (9,99999999999999,'Correios Limitada','Correios','correios@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (10,12345678912345,'Computacion Tecnologias e Equipamentos Empresariais SA','Computacion','computacion_adm@provedor.com');
INSERT INTO  Empresa  (id_empresa, cnpj, razao_social, nome_fantasia, email) VALUES (11,10203040506070,'Terceriza Empresa de Serviços Tercerizados Ltda','Terceriza','terceriza@provedor.com');











-- INSERÇÃO DE DADOS NA TABELA Endereco
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (1,'Olívia Flores',100,'Candeias','Vitoria da Conquista','BA',1);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (2,'Pará',200,'Ibirapuera','Vitoria da Conquista','BA',2);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (3,'Siqueira Campos',300,'Centro','Vitoria da Conquista','BA',3);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (4,'Nove de Novembro',400,'Guarani','Vitoria da Conquista','BA',4);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (5,'Sete de Setembro',500,'Guarani','Tapirema','BA',5);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (6,'Luís Eduardo',600,'Jurema','Vitoria da Conquista','BA',6);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (7,'Brasil',700,'Zabelê','Vitoria da Conquista','BA',7);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (8,'Maranhão',800,'Esplanada do Parque','Vitoria da Conquista','BA',8);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (9,'Pampulha',900,'Boa Vista','Vitoria da Conquista','BA',9);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (10,'Euclides Dantas',1000,'Flamengo','Vitoria da Conquista','BA',10);
INSERT INTO  Endereco  (id_endereco, rua, numero, bairro, cidade, uf, id_empresa) VALUES (11,'Brumado',2145,'Brasil','Vitoria da Conquista','BA',11);











-- INSERÇÃO DE DADOS NA TABELA Telefone
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (1,1,'77','12345678');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (2,1,'77','11111111');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (3,2,'77','22222222');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (4,3,'73','26451259');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (5,4,'75','65217839');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (6,2,'74','56874512');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (7,5,'77','45657894');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (8,6,'71','88888888');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (9,7,'75','88888888');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (10,8,'77','99999999');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (11,9,'77','34257777');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (12,9,'77','91919191');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (13,10,'73','21012101');
INSERT INTO  Telefone  (id_telefone, id_empresa, ddd, numero) VALUES (14,11,'77','91234567');








-- INSERÇÃO DE DADOS NA TABELA Contrato
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,9,'C:\copia100.pdf',1,1,1,12357,'2017-11-02','2018-11-02',NULL,100);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,3,'C:\copia200.pdf',1,1,1,8570,'2017-12-01','2018-12-01','Reclamações por parte dos Alunos do Curso dde BSI no dia  23/10/2014',200);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,7,'C:\copia50.pdf',1,1,2,17400,'2017-05-16','2018-05-06',NULL,50);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,10,'C:\copia3000.pdf',1,2,2,NULL,'2018-10-05','2019-10-05',NULL,3000);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,1,'C:\copia300.pdf',2,1,1,NULL,'2017-11-15',NULL,NULL,300);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,8,'C:\copia400.pdf',1,1,3,13985,'2017-12-01','2018-12-01',NULL,400);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,2,'C:\copia5000.pdf',1,1,1,NULL,'2017-05-20',NULL,NULL,5000);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,4,'C:\copia123.pdf',1,1,1,NULL,'2017-10-21',NULL,NULL,123);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,6,'C:\copia555.pdf',3,1,1,75890,'2017-09-21',NULL,'Houve risco de embargo na visita do Orgão fiscalizador por conta da falta de EPIs e EPCs para os funcionarios. Solucionado pela empresa.',555);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,5,'C:\copia789.pdf',2,1,2,NULL,'2017-05-08',NULL,NULL,789);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (2,7,'C:\copia55.pdf',1,1,1,20000,'2017-04-10','2017-05-06',NULL,55);
INSERT INTO  Contrato  (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero) VALUES (1,11,'C:\copia234.pdf',1,1,1,34580,'2017-02-03','2017-02-03',NULL,234);










-- INSERÇÃO DE DADOS NA TABELA Aditivo
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (1,1,3,'C:\copia201.pdf',9300,'2013-12-02','2014-12-02','Foi conversado que será oferecido um serviço compo para alunos de baixa renda');
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (2,1,3,'C:\copia201.pdf',10100,'2014-12-03','2015-12-03',NULL);
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (1,1,9,'C:\copia10001.pdf',12700,'2014-11-03','2014-11-03',NULL);
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (1,1,6,'C:\copia55501.pdf',54890,'2013-09-23',NULL,NULL);
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (2,1,6,'C:\copia55502.pdf',62340,'2014-09-25',NULL,NULL);
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (1,2,7,'C:\copia5501.pdf',22000,'2012-05-07','2013-05-07',NULL);
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (2,2,7,'C:\copia5502.pdf',23500,'2013-05-08','2014-05-08','Foi mantido o mesmo plano, sem adicionais. Empresa não está cumprindo com a garantia de serviço de internet. Qualidade baixa.');
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (3,2,7,'C:\copia5503.pdf',31250,'2014-05-09','2015-05-09','Aumento da largura de banda pra tentar suprir a necessidade do instituto. Ligar e dar retorno do serviço.');
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (2,1,9,'C:\copia10002.pdf',13000,'2014-11-04','2015-11-04',NULL);
INSERT INTO  Aditivo  (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes) VALUES (1,1,11,'C:\copia23401.pdf',42345,'2013-02-04','2014-02-04','Ampliou o quadro de fincionários em 10 pessoas');












-- INSERÇÃO DE DADOS NA TABELA Conta
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (1,1,1,2,'C:\copia300_01.pdf',2,1,'2019-05-06','2019-05-02','2019-05-02',12987,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (2,1,1,2,'C:\copia300_02.pdf',2,1,'2019-06-06','2019-06-05','2019-06-05',15321,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (1,1,2,2,'C:\copia5000_01.pdf',2,1,'2019-05-10','2019-05-05','2019-05-06',9343,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (2,1,2,2,'C:\copia5000_02.pdf',2,1,'2019-06-10','2019-06-09','2019-06-09',8743,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (3,1,2,1,'C:\copia5000_03.pdf',2,2,'2019-07-10','2019-07-01','2019-07-01',10286,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (1,1,3,2,'C:\copia200_01.pdf',1,1,'2019-06-11','2019-06-07','2019-06-07',760,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (2,1,3,1,'C:\copia200_02.pdf',1,2,'2019-07-11',NULL,NULL,760,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (3,1,1,2,'C:\copia300_03.pdf',2,1,'2019-07-06','2019-07-01','2019-07-04',11570,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (4,1,1,2,'C:\copia300_04.pdf',2,1,'2019-08-06','2019-08-02','2019-08-05',15321,NULL);
INSERT INTO  Conta  (id_conta, id_contrato, id_empresa, id_usuario, copia_conta, tipo_conta, status_conta,  data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes) VALUES (5,1,1,1,'C:\copia300_05.pdf',2,2,'2019-09-06','2019-09-03',NULL,15321,NULL);












-- INSERÇÃO DE DADOS NA TABELA Pagamento
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,1,1,1,12987,NULL,'2019-05-04');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,2,1,1,15321,NULL,'2019-06-06');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,1,1,2,9343,NULL,'2019-05-08');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,2,1,2,8743,NULL,'2019-06-10');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,3,1,2,NULL,NULL,NULL);
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,1,1,3,760,NULL,'2019-06-09');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,2,1,3,NULL,NULL,NULL);
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,3,1,1,11570,NULL,'2019-07-05');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,4,1,1,15321,NULL,'2019-08-06');
INSERT INTO  Pagamento  (id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta) VALUES (1,5,1,1,NULL,NULL,NULL);










