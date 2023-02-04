import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpenseFilter";
import ExpensesList from "./NewExpense/ExpensesList";
import "./Expense.css";

function Expense(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
     return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          changedYear={filterYear}
          onValueChange={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expense;
