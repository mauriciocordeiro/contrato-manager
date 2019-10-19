-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.

DROP DATABASE IF EXISTS gerenciamento_contratos_new;

CREATE DATABASE gerenciamento_contratos_new;
USE gerenciamento_contratos_new;

CREATE TABLE Setor (
id_setor INTEGER PRIMARY KEY,
nome VARCHAR(50)
);

CREATE TABLE Usuario (
id_usuario INTEGER PRIMARY KEY,
id_setor INTEGER,
senha VARCHAR(20),
nome VARCHAR(50),
login VARCHAR(20),
FOREIGN KEY(id_setor) REFERENCES Setor (id_setor)
);

CREATE TABLE Aditivo (
id_aditivo INTEGER,
id_contrato INTEGER,
id_empresa INTEGER,
copia_contrato_aditivo VARCHAR(100),
valor_contrato_aditivo DECIMAL,
observacoes VARCHAR(255),
data_renovacao DATETIME,
data_vencimento DATETIME,
PRIMARY KEY(id_aditivo,id_contrato,id_empresa)
);

CREATE TABLE Empresa (
id_empresa INTEGER PRIMARY KEY,
cnpj VARCHAR(14),
razao_social VARCHAR(255),
email VARCHAR(50),
nome_fantasia VARCHAR(50)
);

CREATE TABLE Telefone (
id_telefone INTEGER,
id_empresa INTEGER,
numero VARCHAR(15),
ddd VARCHAR(2),
PRIMARY KEY(id_telefone,id_empresa),
FOREIGN KEY(id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE Endereco (
id_endereco INTEGER,
id_empresa INTEGER,
numero VARCHAR(50),
rua VARCHAR(50),
bairro VARCHAR(50),
cidade VARCHAR(50),
uf VARCHAR(2),
PRIMARY KEY(id_endereco,id_empresa),
FOREIGN KEY(id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE Contrato (
id_contrato INTEGER,
id_empresa INTEGER,
copia_contrato VARCHAR(100),
data_finalizacao DATETIME,
data_celebracao DATETIME,
valor_contrato DECIMAL,
prestacao INTEGER,
tipo_contrato INTEGER,
status_contrato INTEGER,
numero VARCHAR(50),
observacoes VARCHAR(255),
PRIMARY KEY(id_contrato,id_empresa),
FOREIGN KEY(id_empresa) REFERENCES Empresa (id_empresa)
);

CREATE TABLE Conta (
id_conta INTEGER,
id_contrato INTEGER,
id_empresa INTEGER,
id_usuario INTEGER,
copia_conta VARCHAR(100),
status_conta INTEGER,
observacoes VARCHAR(255),
data_envio_dof DATETIME,
data_vencimento DATETIME,
data_recebimento_setor DATETIME,
valor_conta DECIMAL,
tipo_conta INTEGER,
PRIMARY KEY(id_conta,id_contrato,id_empresa),
FOREIGN KEY(id_contrato,id_empresa) REFERENCES Contrato (id_contrato,id_empresa)
);

CREATE TABLE Pagamento (
id_pagamento VARCHAR(50),
id_conta INTEGER,
id_contrato INTEGER,
id_empresa INTEGER,
valor_pago VARCHAR(50),
taxa_juros DECIMAL,
data_pagamento_conta DATETIME,
PRIMARY KEY(id_pagamento,id_conta,id_contrato,id_empresa),
FOREIGN KEY(id_conta, id_contrato, id_empresa) REFERENCES Conta (id_conta,id_contrato,id_empresa)
);

ALTER TABLE Aditivo ADD FOREIGN KEY(id_contrato,id_empresa) REFERENCES Contrato (id_contrato,id_empresa);
ALTER TABLE Conta ADD FOREIGN KEY(id_usuario) REFERENCES Usuario (id_usuario)