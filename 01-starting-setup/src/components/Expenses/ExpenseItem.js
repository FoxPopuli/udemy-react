import "./ExpenseItem.css";
import SquareDate from "./SquareDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <SquareDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
