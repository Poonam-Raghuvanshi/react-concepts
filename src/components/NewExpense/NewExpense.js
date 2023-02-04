
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [idEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
  const setIsEditingTrue = () => {
    setIsEditing(true);
  };
  const setIsEditingFalse = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!idEditing && (
        <button onClick={setIsEditingTrue}>Add New Expense</button>
      )}
      {idEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={setIsEditingFalse}/>}
    </div>
  );
};

export default NewExpense;
