// 1 Buscar todas os contratos de uma empresa;
db.contrato.find({
	_id_empresa: ?
})

//2 Buscar debito e receita do mês levando em consideração todas as contas de contratos ativos, agrupando por contas pagae  e total
db.contrato.aggregate([
	{ 
		$unwind: "$conta"
	},
	{
		$project: {
			conta: 1,
			status_contrato: 1,
			mes_conta: { $month: "$pagamento.data_pagamento_conta" },
			ano_conta: { $year: "$data_pagamento_conta" }
		}
	},
	{
		$match: {
			$and: [ 
				  {status_contrato: 1}, 
				  {mes_conta: ?}, 
				  {ano_conta: ?}
			]
		}
	},
	{
		$group:{
			_id: "$tipo_conta", total:{$sum: "$valor_conta"}, pago: {$sum: "$pagamento.valor_pago"}
		}
	}
]);

// 3 Buscar data de vencimento do contrato levando em consideração seus aditivos
db.contrato.aggregate([
	{
		$match: {_id: ?}
	},
	{
		$project: {
			valor_contrato: 1, 
			dataMaxAditivo: { $max: "$aditivo.data_vencimento"}
		}
	},
	{
		$project: {
			maiorData: {$max: ['$valor_contrato','$dataMaxAditivo']}
		}			
	}	
	
]);

// 4 Buscar todos os contratos que estão para vencer em até 30 dias
db.contrato.aggregate([
	{
		$project: {
			dias_vencimento: {$divide : [{$subtract: ["$data_vencimento", new Date()]}, 86400000]}
		}
	},
	{
		$match: {$lte: ["$dias_vencimento", 30]}
	}

]);

// 5 Buscar todas as contas que estão para vencer em até 7 dias;
db.contrato.aggregate([
	{
		$unwind: "$conta"
	},
	{
		$project: {
			dias_vencimento: {$divide : [{$subtract: ["$data_vencimento_conta", new Date()]}, 86400000]}
		}
	},
	{
		$match: {$lte: ["$dias_vencimento", 7]}
	}

]);

// 6 Buscar média dos valores gastos/recebidos dos ultimos trinta dias;
db.contrato.aggregate([
	{ 
		$unwind: "$conta"
	},
	{
		$project: {
			dias: {$divide : [{$subtract: ["$pagamento.data_pagamento_conta", new Date()]}, 86400000]}
		}
	},
	{
		$match: {
			$lte: [ 
				  dias, 
				  30
			]
		}
	},
	{
		$group:{
			_id: "$tipo_conta", 
			media:{$avg: "$valor_pago"}
		}
	}
]);

//7 Buscar por mês (no último ano) quanto foi gasto e recebido;
db.contrato.aggregate([
	{ 
		$unwind: "$conta"
	},
	{
		$project: {
			tipo_pago: 1,
			valor_pago: 1,
			ano_atual: { $year: new Date() },
			mes_conta: { $month: "$pagamento.data_pagamento_conta" },
			ano_conta: { $year: "$pagamento.data_pagamento_conta" }
		}
	},
	{
		$match: {
			$eq:["$ano_conta", "$ano_atual"]
		}
	},
	{
		$group:{
			_id: {tipo_conta: "$tipo_conta", mes: "$mes_conta"}, 
			total:{$sum: "$valor_pago"}
		}
	}
]);

//8 Buscar percentual de contas que foram pagas em atraso nos últimos doze meses;

//9 Qual o total pago em aditivos no último ano
db.contrato.aggregate([
	{ 
		$unwind: "$aditivo"
	},
	{
		$project: {
			valor_contrato_aditivo: 1,
			ano_atual: { $year: new Date() },
			ano_aditivo: { $year: "$data_renovacao" }
		}
	},
	{
		$match: {
			$eq:["$ano_conta", "$ano_atual"]
		}
	},
	{
		$group:{
			_id: null, 
			total:{$sum: "$valor_contrato_aditivo"}
		}
	}
]);


//10 Empresas com conta em aberto, mostrando o telefone de contato
db.contrato.aggregate([
    { $match: { conta: { "$elemMatch": { pagamento: { "$exists": false } } } } },
    { $project: {
        conta: { $filter: { 
            input: "$conta", 
            as: "item", 
            cond: { $eq: [ { $type: "$$item.pagamento" }, "missing" ] }
        } },
		telefone: 1
    } }
]);