-- 1 Buscar todas os contratos de uma empresa;
SELECT * FROM contrato WHERE id_empresa = ?

-- 2 Buscar debito e receita do mês levando em consideração todas as contas de contratos ativos, agrupando por contas pagae  e total
SELECT tipo_conta, SUM(CON.valor_conta) AS TOTAL, SUM(PAG.valor_pago) AS PAGO
FROM conta CON
JOIN contrato CONTR ON (CON.id_contrato = CONTR.id_contrato	
							AND CON.id_empresa = CONTR.id_empresa)
LEFT OUTER JOIN pagamento PAG ON (CON.id_conta = PAG.id_conta
									AND CON.id_contrato = PAG.id_contrato
									AND CON.id_empresa = PAG.id_empresa)
WHERE CONTR.status_contrato = 1
  AND MONTH(CON.data_vencimento) = ? 
  AND YEAR(CON.data_vencimento) = ?
GROUP BY tipo_conta

-- 3 Buscar data de vencimento do contrato levando em consideração seus aditivos
SELECT MAX(ADI.data_vencimento) AS data_vencimento_aditivo, CONTR.data_vencimento AS data_vencimento_contrato FROM contrato CONTR
LEFT OUTER JOIN aditivo ADI ON (CONTR.id_contrato = ADI.id_contrato
									AND CONTR.id_empresa = ADI.id_empresa)
WHERE id_contrato = ?
ORDER BY ADI.data_vencimento

-- 4 Buscar todos os contratos que estão para vencer em até 30 dias
SELECT * FROM contrato WHERE CONTR.data_vencimento + interval 30 day >= now()

-- 5 Buscar todas as contas que estão para vencer em até 7 dias;
SELECT * FROM conta WHERE CON.data_vencimento + interval 7 day >= now()

-- 6 Buscar média dos valores gastos/recebidos dos ultimos trinta dias;
SELECT CON.tipo_conta, AVG(PAG.valor_pago)
FROM pagamento PAG
JOIN conta CON ON (PAG.id_conta = CON.id_conta)
WHERE PAG.data_pagamento_conta >= now() - interval 30 day
GROUP BY CON.tipo_conta

-- 7 Buscar por mês (no último ano) quanto foi gasto e recebido;
SELECT CON.tipo_conta, MONTH(PAG.data_pagamento_conta), SUM(PAG.valor_pago)
FROM pagamento PAG
JOIN conta CON ON (PAG.id_conta = CON.id_conta)
WHERE YEAR(PAG.data_pagamento_conta) = YEAR(now())

-- 8 Buscar percentual de contas que foram pagas em atraso nos últimos doze meses;
SELECT MONTH(PAG.data_pagamento_conta), ((COUNT(*) / (SELECT COUNT(*) FROM pagamento PAG_2 
			JOIN CON_2 ON (PAG_2.id_conta = CON_2.id_conta) 
		  WHERE PAG_2.data_pagamento_conta >= now() - interval 365 day
		  GROUP BY MONTH(PAG_2.data_pagamento_conta)))*100) AS PORCENTAGEM_CONTAS_ATRASO
FROM pagamento PAG
JOIN conta CON ON (PAG.id_conta = CON.id_conta)
WHERE PAG.data_pagamento_conta >= now() - interval 365 day
  AND PAG.taxa_juros > 0
GROUP BY MONTH(PAG.data_pagamento_conta)

-- 9 Qual o total pago em aditivos no último ano
SELECT SUM(valor_contrato_aditivo) FROM aditivo
WHERE YEAR(data_renovacao) = YEAR(now())

-- 10 Empresas com conta em aberto, mostrando o telefone de contato
SELECT EMP.razao_social, (SELECT GROUP_CONCAT(TEL.numero SEPARATOR ', ') 
  FROM telefone TEL
  WHERE TEL.id_empresa = CON.id_empresa) AS telefones  FROM conta CON
JOIN empresa EMP ON (CON.id_empresa = EMP.id_empresa)
WHERE NOT EXISTS (SELECT * FROM pagamento PAG WHERE CON.id_conta = PAG.id_conta)