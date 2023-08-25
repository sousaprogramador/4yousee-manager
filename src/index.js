import Express from 'express';
import { isValid, isPriority } from './utils.js';
import datas from '../data.json' assert { type: 'json' };

const app = Express();

app.get('/', (req, res) => {
  const validPlans = datas.plans.filter((plan) =>
    isValid(plan.schedule.startDate)
  );

  const priority = isPriority(validPlans);

  res.send(priority);
});

app.listen(3333, () => console.log('Servidor iniciado na porta 3333'));
