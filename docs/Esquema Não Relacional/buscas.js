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
		$unwind: "$pagamento"
	},
	{
		$project: {
			conta: 1,
			status_contrato: 1,
			mes_conta: { $month: "$data_pagamento_conta" },
			ano_conta: { $year: "$data_pagamento_conta" },
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
			_id: "$tipo_conta", total:{$sum: "$valor_conta"}, pago: {$sum: "$valor_pago"}
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
		$unwind: "$pagamento"
	},
	{
		$project: {
			dias_vencimento: {$divide : [{$subtract: ["$data_pagamento_conta", new Date()]}, 86400000]}
		}
	},
	{
		$match: {
			$lte: [ 
				  dias_vencimento, 
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

