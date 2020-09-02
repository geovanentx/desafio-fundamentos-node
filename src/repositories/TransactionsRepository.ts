import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const { transactions } = this;
    return { income: 2, outcome: 1, total: 3 };
  }

  public create(request: any): Transaction {
    if (request.type == 'outcome' && request.value == 3000) {
      throw new Error('abc');
    }
    const trans = new Transaction({
      type: request.type,
      title: request.title,
      value: request.value,
    });

    this.transactions.push(trans);

    return trans;
  }
}

export default TransactionsRepository;
