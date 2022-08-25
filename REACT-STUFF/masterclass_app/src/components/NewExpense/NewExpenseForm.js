import "./NewExpenseForm.css";
import React, { useState } from "react";

const NewExpenseForm = (props) => {

    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    const titleHandler = (event) => {
        console.log("Title: " + event.target.value);
        setNewTitle(event.target.value);
    }

    const amountHandler = (event) => {
        console.log("Amount: " + event.target.value);
        setNewAmount(event.target.value);
    }

    const dateHandler = (event) => {
        console.log("Date: " + event.target.value);
        setNewDate(event.target.value);
    }

    const formHandler = (event) => {
        event.preventDefault();
        console.log(event);
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewDate('');
        setNewAmount('');
        
    }


  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input value={newTitle} type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input value={newDate} type="date" min="2019-01-01" max="2022-12-31"  onChange={dateHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input value={newAmount} type="number" min="0.01" step="0.01" onChange={amountHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
