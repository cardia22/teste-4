const faturamentoPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 },
  ];
  
  // Calcula o valor total mensal da distribuidora
  const valorTotal = faturamentoPorEstado.reduce((total, estado) => total + estado.valor, 0);
  
  // Calcula o percentual de representação de cada estado
  const percentuaisPorEstado = faturamentoPorEstado.map((estado) => {
    return {
      estado: estado.estado,
      percentual: (estado.valor / valorTotal) * 100
    };
  });
  
  // Imprime o resultado
  percentuaisPorEstado.forEach((estado) => {
    console.log(`${estado.estado} - ${estado.percentual.toFixed(2)}%`);
  });
  