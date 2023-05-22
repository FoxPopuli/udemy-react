import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const dateObj = new Date();
  const maxDate = `
  ${dateObj.getFullYear()}-
  ${dateObj.getMonth() + 1}-
  ${dateObj.getDate()}
  `;

  // MULTIPLE STATES

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => setTitle(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);

  //   //   ONE STATE
  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  //   // Use arrow functions to ensure prevState is always the most recent state
  //   // Values are scheduled to change when the setter is called, not changed right away
  //   // Using anonymous arrow functions that return the state object
  //   // ensures the correct order of operations
  //   const titleChangeHandler = (event) =>
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,               // deconstruct all values
  //         title: event.target.value,  // then update the relevent one
  //       };
  //     });
  //   const amountChangeHandler = (event) =>
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         amount: event.target.value,
  //       };
  //     });
  //   const dateChangeHandler = (event) =>
  //     setUserInput((prevStat) => {
  //       return {
  //         ...prevStat,
  //         date: event.target.value,
  //       };
  //     });

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" max={maxDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
