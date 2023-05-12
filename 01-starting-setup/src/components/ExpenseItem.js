import "./ExpenseItem.css";
import SquareDate from "./SquareDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <SquareDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
