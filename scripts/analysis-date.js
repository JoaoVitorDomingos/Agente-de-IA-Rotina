// Pega a data e hora atual (momento da execução no domingo)
const hoje = new Date();

// 1. Calcula a Data Final (Sábado da semana passada - ontem)
const endDateObj = new Date(hoje);
endDateObj.setDate(hoje.getDate() - 1);

// 2. Calcula a Data Inicial (Domingo da semana passada - 7 dias atrás)
const startDateObj = new Date(hoje);
startDateObj.setDate(hoje.getDate() - 7);

// Função auxiliar para formatar a data no padrão YYYY-MM-DD (exigido pelo Notion)
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Meses começam em 0
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Formata as variáveis finais
const startDate = formatDate(startDateObj);
const endDate = formatDate(endDateObj);
const today = formatDate(hoje);

console.log(`Data Inicial: ${startDate}, Data Final: ${endDate}, Data de Hoje: ${today}`);

// Retorna os dados estruturados para os próximos nós do n8n
return [
  {
    json: {
      startDate: startDate,
      endDate: endDate,
      today: today,
    },
  },
];
