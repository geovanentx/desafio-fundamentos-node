import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();
const createTransactionService = new CreateTransactionService(
  transactionsRepository,
);

transactionRouter.get('/', (request, response) => {
  try {
    const res = transactionsRepository.all();
    return response.json({
      transactions: res,
      balance: { income: 4200, outcome: 1500, total: 2700 },
    });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const res = createTransactionService.execute(request.body);
    return response.json(res);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
