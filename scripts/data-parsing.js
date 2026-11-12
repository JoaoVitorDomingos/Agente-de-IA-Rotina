const itemsAnalise = $('GET Analise').all();
const itemsAnaliseMD = $('GET conteúdo md').all();
const itemsRotina = $('GET Rotina').all();

//console.log(itemsAnalise);
//console.log(itemsAnaliseMD);

const res = itemsAnalise.map(({ json }) => {
  const [analiseMd] = itemsAnaliseMD
    .filter(md => md.json.id == json.id)
    .map(({ json }) => json.markdown);

  const atvs = itemsRotina
    .filter(item => json.property_execução.includes(item.json.id))
    .map(item => {
      return {
        idAtividade: item.json.id,
        nomeAtividade: item.json.name,
        foiConcluido: item.json.property_concluido,
        data: item.json.property_data.start,
        horarioExecucao: item.json.property_horário,
        observacao: item.json.property_observação,
        significadoAtividade: item.json.property_significado
      }
    });

  return {
    id: json.id,
    name: json.name,
    progressoPuro: json.property_progresso,
    totalAtividades: json.property_total_de_atividades,
    atividades: atvs,
    resumoDia: analiseMd || ""
  };
})

//console.log(res);

return res;