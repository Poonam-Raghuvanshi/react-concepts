import React, { useState } from "react";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DATA = [
  { id: 1, title: "Car Insurance", amount: 200, date: new Date(2023, 2, 2) },
  { id: 2, title: "Home Insurance", amount: 130, date: new Date(2022, 2, 2) },
  { id: 3, title: "Car Insurance", amount: 400, date: new Date(2021, 5, 2) },
  { id: 4, title: "Car Insurance", amount: 600, date: new Date(2023, 6, 4) },
];
function App() {
  const [expenses, updateExpense] = useState(INITIAL_DATA);

  const addExpenseHandler = (expense) => {
    /*clean way of updating state*/
    updateExpense((prevState) => {
      return [expense,...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
