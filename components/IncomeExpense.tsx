import getIncomeExpense from "@/app/actions/getIncomeExpense";

const IncomeExpense = async () => {
  const {income, expense} = await getIncomeExpense();

  return (
    <div className='inc-exp-container'>
      <div>
        <p>Income</p>
        <p className='money plus'>${income}</p>
      </div>
      <div>
        <p>Expense</p>
        <p className='money minus'>${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
