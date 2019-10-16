-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE Usuario (
id_usuario VARCHAR(10) PRIMARY KEY,
login VARCHAR(10),
senha VARCHAR(10),
nome VARCHAR(10)
)

CREATE TABLE Setor (
id_setor VARCHAR(10) PRIMARY KEY,
nome VARCHAR(10),
id_usuario VARCHAR(10),
FOREIGN KEY(id_usuario) REFERENCES Usuario (id_usuario)
)

CREATE TABLE Contrato (
id_contrato VARCHAR(10) PRIMARY KEY,
copia_contrato VARCHAR(10),
observacoes VARCHAR(10),
prestacao VARCHAR(10),
tipo_contrato VARCHAR(10),
status_contrato VARCHAR(10),
data_finalizacao VARCHAR(10),
data_celebracao VARCHAR(10),
valor_contrato VARCHAR(10),
numero VARCHAR(10),
id_empresa VARCHAR(10)
)

CREATE TABLE Conta (
id_conta VARCHAR(10) PRIMARY KEY,
copia_conta VARCHAR(10),
valor_conta VARCHAR(10),
data_vencimento VARCHAR(10),
data_recebimento_setor VARCHAR(10),
data_envio_dof VARCHAR(10),
observacoes VARCHAR(10),
tipo_conta VARCHAR(10),
status_conta VARCHAR(10),
id_contrato VARCHAR(10),
FOREIGN KEY(id_contrato) REFERENCES Contrato (id_contrato)
)

CREATE TABLE Aditivo (
id_aditivo VARCHAR(10) PRIMARY KEY,
observacoes VARCHAR(10),
data_renovacao VARCHAR(10),
valor_contrato_aditivo VARCHAR(10),
data_vencimento VARCHAR(10),
copia_contrato_aditivo VARCHAR(10),
id_contrato VARCHAR(10),
FOREIGN KEY(id_contrato) REFERENCES Contrato (id_contrato)
)

CREATE TABLE Empresa (
id_empresa VARCHAR(10) PRIMARY KEY,
cnpj VARCHAR(10),
razao_social VARCHAR(10),
email VARCHAR(10),
nome_fantasia VARCHAR(10)
)

CREATE TABLE Endereco (
id_endereco VARCHAR(10) PRIMARY KEY,
numero VARCHAR(10),
rua VARCHAR(10),
bairro VARCHAR(10),
cidade VARCHAR(10),
uf VARCHAR(10),
id_empresa VARCHAR(10),
FOREIGN KEY(id_empresa) REFERENCES Empresa (id_empresa)
)

CREATE TABLE Telefone (
id_telefone VARCHAR(10) PRIMARY KEY,
numero VARCHAR(10),
ddd VARCHAR(10),
id_empresa VARCHAR(10),
FOREIGN KEY(id_empresa) REFERENCES Empresa (id_empresa)
)

CREATE TABLE Pagamento (
data_pagamento_conta VARCHAR(10),
valor_pago VARCHAR(10),
taxa_juros VARCHAR(10),
id_pagamento VARCHAR(10) PRIMARY KEY,
id_conta VARCHAR(10),
FOREIGN KEY(id_conta) REFERENCES Conta (id_conta)
)

ALTER TABLE Contrato ADD FOREIGN KEY(id_empresa) REFERENCES Empresa (id_empresa)
