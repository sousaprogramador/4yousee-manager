const datas = require('./data.json');

const teste = datas.plans.sort((a, b) => {
  if (a.localidade.prioridade !== b.localidade.prioridade) {
    return a.localidade.prioridade - b.localidade.prioridade;
  }
});
