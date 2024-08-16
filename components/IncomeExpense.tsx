import getIncomeExpense from "@/app/actions/getIncomeExpense";
import { addApostrophe } from "@/lib/utils";

const IncomeExpense = async () => {
  const {income, expense} = await getIncomeExpense();

  return (
    <div className='inc-exp-container'>
      <div>
        <p>Income</p>
        <p className='money plus'>${addApostrophe(Number(income?.toFixed(2) ?? 0))}</p>
      </div>
      <div>
        <p>Expense</p>
        <p className='money minus'>${addApostrophe(Number(expense?.toFixed(2) ?? 0))}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;