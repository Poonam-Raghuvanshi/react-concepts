import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  const expenses = [
    { title: "Car Insurance", amount: 200, date: new Date(2023, 2, 2) },
    { title: "Home Insurance", amount: 130, date: new Date(2022, 2, 2) },
    { title: "Car Insurance", amount: 400, date: new Date(2021, 5, 2) },
    { title: "Car Insurance", amount: 600, date: new Date(2023, 6, 4) },
  ];
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
