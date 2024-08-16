'use server';

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  let result: TransactionResult = {};

  const textValue = formData.get('text');
  const amountValue = formData.get('amount');

  // Check for input values
  if (!textValue || textValue === '' || !amountValue) {
    result.error = 'Text or amount is missing';
  } else {
    const text: string = textValue.toString(); // Ensure text is a string
    const amount: number = parseFloat(amountValue.toString()); // Parse amount as number

    const transactionData: TransactionData = {
      text,
      amount,
    };

    result.data = transactionData;
  }

  return result;
}

export default addTransaction;
