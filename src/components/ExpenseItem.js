import React from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
/* It has the be called inside component function but cannot be nested */
 /*const [title, setTitle]= useState(props.title);
 const clicked=()=>{
  setTitle("New Title");
 }
  <button onClick={clicked}>Change Title</button>*/
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
     
    </Card>
  );
}
export default ExpenseItem;
