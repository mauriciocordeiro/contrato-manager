-- INSERÇÂO DE DADOS NA TABELA SETOR
INSERT INTO Setor (id_setor, nome)
	VALUES (1, 'Fiscal');
INSERT INTO Setor (id_setor, nome)
	VALUES (2, 'Financeiro');

-- INSERÇÃO DE DADOS NA TABELA USUARIO
INSERT INTO Usuario (id_usuario, nome, login, senha, id_setor)
	VALUES (1, 'Cassio', 'cassio', '12345', 1);
INSERT INTO Usuario (id_usuario, nome, login, senha, id_setor)
	VALUES (2, 'Ezequiel', 'ezequias', '101010', 2);
	
-- INSERÇÃO DE DADOS NA TABELA EMPRESA
INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (1, '11111111111111', 'Coelba Limitada', 'Coelba Conquista', 'coelba@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Olivia Flores', 100, 'Candeias', 'Vitoria da Conquista', 'BA', 1);
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 1, '77', '12345678');
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (2, 1, '77', '11111111');
	
	
INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (2, '22222222222222', 'Embasa Limitada', 'Embasa Conquista', 'embasa@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Para', 200, 'Ibirapuera', 'Vitoria da Conquista', 'BA', 2);
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 2, '77', '22222222');
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (2, 2, '74', '568745129');

INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (3, '33333333333333', 'Lanchonete Teixeira', 'Lanchonete Teixeira', 'teixeirao@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Siqueira Campos', 300, 'Centro', 'Vitoria da Conquista', 'BA', 3);
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 3, '73', '264512598');


INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (4, '44444444444444', 'Seguro Alunos RSA', 'Seguro', 'segurorsa@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Nove de Novembro', 400, 'Guarani', 'Tapirema', 'BA', 4);
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 4, '75', '65217839');


INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (5, '55555555555555', 'Coelba Limitada', 'Coelba Tapirema', 'coelbatapirema@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Sete de Setembro', 500, 'Guarani', 'Tapirema', 'BA', 5);	
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 5, '77', '45657894');	
		

INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (6, '66666666666666', 'Contrulita Prestadora de Serviços em Construções Empresariais SA', 'Construlita', 'constulita@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Luis Eduardo', 600, 'Jurema', 'Vitoria da Conquista', 'BA', 6);	
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 6, '71', '888888884');
	

INSERT INTO Empresa (id_empresa, cnpj, razao_social, nome_fantasia, email)
	VALUES (7, '77777777777777', 'Companhia Telefonica', 'Telefone', 'oi@provedor.com');
INSERT INTO Endereco(id_endereco, rua, numero, bairro, cidade, uf, id_empresa)
	VALUES (1, 'Brasil', 700, 'Zabele', 'Vitoria da Conquista', 'BA', 7);		
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (1, 7, '75', '88888888');
INSERT INTO Telefone(id_telefone, id_empresa, ddd, numero)
	VALUES (2, 7, '77', '999999999');
	
	
-- INSERÇÃO DE DADOS NA TABELA CONTRATO
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 1, 'C:\copia100.pdf', 1, 1, 1, 12357.00, '2013-11-02', '2014-11-02', NULL, '12345');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 2, 'C:\copia200.pdf', 1, 1, 1,	8570.00, '2012-12-01', '2013-12-01', 'Reclamações por parte dos Alunos do Curso dde BSI no dia  23/10/2014', '45623');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 3, 'C:\copia50.pdf', 1, 1, 2, 17400.00, '2011-05-16', '2012-05-06', NULL, '83452');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (2, 3, 'C:\copia3000.pdf', 1, 2, 2, NULL, '2014-10-05', '2015-10-05', NULL, '83462');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 4, 'C:\copia300.pdf', 2, 1, 1, NULL, '2000-11-15', NULL, NULL, '23742');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (2, 4, 'C:\copia400.pdf', 1, 1, 3, 13985.00, '2012-12-01',	'2013-12-01', NULL, '84563');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (3, 4, 'C:\copia5000.pdf', 2, 1, 1, NULL, '2001-05-20', NULL, NULL, '02352');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 5, 'C:\copia123.pdf', 2, 1, 1, NULL, '2000-10-21', NULL, NULL, '83562');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (2, 5, 'C:\copia555.pdf', 3, 1, 1, 75890.00, '2012-09-21', NULL, 'Houve risco de embargo na visita do Orgão fiscalizador por conta da falta de EPIs e EPCs para os funcionarios. Solucionado pela empresa.', '57358');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 6, 'C:\copia789.pdf', 2, 1, 2, NULL, '2002-05-08', NULL, NULL, '24724');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (1, 7, 'C:\copia55.pdf', 1, 1, 1, 20000.00, '2012-04-10', '2013-04-10', NULL, '67347');
INSERT INTO Contrato (id_contrato, id_empresa, copia_contrato, tipo_contrato, prestacao, status_contrato, valor_contrato, data_celebracao, data_finalizacao, observacoes, numero)
	VALUES (2, 7, 'C:\copia234.pdf', 1, 1, 1, 34580.00, '2012-02-03', '2013-02-03', NULL, '34622');

-- INSERÇÃO DE DADOS NA TABELA ADITIVO
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (1, 1, 1, 'C:\copia201.pdf', 9300.00, '2013-12-02', '2014-12-02', 'Foi conversado que será oferecido um serviço compo para alunos de baixa renda');
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (2, 1, 1, 'C:\copia201.pdf', 10100.00, '2014-12-03', '2015-12-03', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (1, 1, 3, 'C:\copia10001.pdf', 12700.00, '2014-11-03', '2015-11-03', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (1, 1, 4, 'C:\copia55501.pdf', 54890.00, '2013-09-23', '2014-09-23', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (2, 1, 4, 'C:\copia55502.pdf', 62340.00, '2014-9-25', '2015-09-25', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (1, 2, 5, 'C:\copia5501', 22000.00, '2012-05-07', '2013-05-07', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (2, 2, 5, 'C:\copia5502', 23500.00, '2013-05-08', '2015-05-08', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (3, 2, 5, 'C:\copia5503', 31250.00, '2014-05-09', '2015-05-09', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (1, 1, 7, 'C:\copia100002.pdf', 13000.00, '2014-11-04', '2015-11-04', NULL);
INSERT INTO Aditivo (id_aditivo, id_contrato, id_empresa, copia_contrato_aditivo, valor_contrato_aditivo, data_renovacao, data_vencimento, observacoes)
	VALUES (1, 2, 7, 'C:\copia23401.pdf', 42345.00, '2013-02-04', '2014-02-04', 'Ampliou o quadro de fincionários em 10 pessoas');

-- INSERÇÃO DE DADOS NA TABELA CONTA e PAGAMENTO
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (1, 1, 1, 'C:\copia300_01.pdf', 2, 1, '2014-05-06', '2014-05-02', '2014-05-02', 12987.00, NULL);
INSERT INTO PAGAMENTO(id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta)	
	VALUES(1, 1, 1, 1, 12987.00, 0, '2014-05-04');
	
	
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (1, 1, 4, 'C:\copia300_02.pdf', 2, 1, '2014-06-06', '2014-06-05', '2014-06-05', 15321.00, NULL);
INSERT INTO PAGAMENTO(id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta)	
	VALUES(1, 1, 1, 4, 15321.00, 0, '2014-06-06');	
	
	
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (2, 1, 4, 'C:\copia5000_01.pdf', 2, 1, '2014-05-10', '2014-05-05', '2014-05-06', 9343.00, NULL);
INSERT INTO PAGAMENTO(id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta)	
	VALUES(1, 2, 1, 4, 9343.00, 0, '2014-05-08');		
	
	
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (1, 3, 4, 'C:\copia5000_02.pdf', 2, 1, '2014-06-10', '2014-06-09', '2014-06-09', 8743.00, NULL);
INSERT INTO PAGAMENTO(id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta)	
	VALUES(1, 1, 3, 4, 8743.00, 0, '2014-06-10');			
	
	
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (2, 3, 4, 'C:\copia5000_03.pdf', 2, 2, '2014-07-10', '2014-07-01', '2014-07-01', 10286.00, NULL);


INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (1, 2, 5, 'C:\copia200_01.pdf', 1, 1, '2014-06-11', '2014-06-07', '2014-06-07', 760.00, NULL);
INSERT INTO PAGAMENTO(id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta)	
	VALUES(1, 1, 2, 5, 760.00, 0, '2014-06-09');				

	
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (1, 1, 6, 'C:\copia200_02.pdf', 1, 2, '2014-07-11', '2014-07-07', NULL, 760.00, NULL);

	
INSERT INTO CONTA (id_conta, id_contrato, id_empresa, copia_conta, tipo_conta, status_conta, data_vencimento, data_recebimento_setor, data_envio_dof, valor_conta, observacoes)
	VALUES (2, 1, 6, 'C:\copia300_03.pdf', 2, 1, '2014-07-06', '2014-07-01', '2014-07-04', 11570.00, NULL);
INSERT INTO PAGAMENTO(id_pagamento, id_conta, id_contrato, id_empresa, valor_pago, taxa_juros, data_pagamento_conta)	
	VALUES(1, 2, 1, 6, 12527.00, 10, '2014-07-10');					
	