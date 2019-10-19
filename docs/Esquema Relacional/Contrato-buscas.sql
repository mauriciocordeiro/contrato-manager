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

