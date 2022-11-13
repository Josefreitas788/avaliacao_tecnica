select p.nome as NOME, extract(day from pg.dt_pagamento) as DIA_MES, c.VALOR_PARCELA as VALOR_PARCELA 
from pessoas p 
inner join pagamentos pg on p.id = pg.pessoa_id
inner join contratos c on c.id = p.contrato_id
where P.inadimplente = 'S'
order by 1;


select p.nome as NOME, sum(c.VALOR_PARCELA*c.parcelas) as VALOR_TOTAL
from pessoas p
inner join pagamentos pg on p.id = pg.pessoa_id
inner join contratos c on p.contrato_id = c.id
where p.inadimplente = 'N'
group by nome;
