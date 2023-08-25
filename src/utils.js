export const isValid = (startDate) => {
  return new Date(startDate).getTime() < new Date().getTime();
};

export const isPriority = (locations) => {
  const sortList = locations.sort((primary, secondary) => {
    if (primary.localidade.prioridade !== secondary.localidade.prioridade) {
      return primary.localidade.prioridade - secondary.localidade.prioridade;
    }

    const startDateA = new Date(primary.schedule.startDate).getTime();
    const startDateB = new Date(secondary.schedule.startDate).getTime();
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
