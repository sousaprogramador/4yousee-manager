export const isValid = (startDate) => {
  return new Date(startDate).getTime() < new Date().getTime();
};

export const isPriority = (locations) => {
  const sortList = locations.sort((a, b) => {
    if (a.localidade.prioridade !== b.localidade.prioridade) {
      return a.localidade.prioridade - b.localidade.prioridade;
    }

    const startDateA = new Date(a.schedule.startDate).getTime();
    const startDateB = new Date(b.schedule.startDate).getTime();
    return startDateA - startDateB;
  });

  const map = new Map();
  for (const item of sortList) {
    const key = `${item.name}_${item.localidade.nome}`;
    map.set(key, item);
  }
  const unique = Array.from(map.values());
  return unique;
};
