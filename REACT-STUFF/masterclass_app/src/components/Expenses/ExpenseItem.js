import React, { useState } from "react";
import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../User_Interface/Card";

function ExpenseItem(props) {
 const [title, setTitle] = useState(props.title);
 
  const clickHandler = () => {
    setTitle('Updated!');
    console.log("You clicked", title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
