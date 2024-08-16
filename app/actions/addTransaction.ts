'use server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath, revalidateTag } from 'next/cache';

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

    // Get logged in user
    const { userId } = auth();

    // Check for user
    if (!userId) {
      result.error = 'User not found';
    } else {
      try {
        const transactionData: TransactionData = await db.transaction.create({
          data: {
            text,
            amount,
            userId,
          },
        });

        revalidatePath('/');
 
        result.data = transactionData;
      } catch (error) {
        result.error = 'Transaction not added';
      }
    }
  }

  return result;
}

export default addTransaction;
