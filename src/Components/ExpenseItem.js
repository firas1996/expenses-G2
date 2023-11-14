import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, price, date }) => {
  const [myTitle, setMyTitle] = useState(title);
  let newTitle = title;
  const updateTitle = () => {
    setMyTitle("New Title");
    console.log("1", myTitle);
  };
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        {/* {console.log("2", myTitle)} */}
        <h2>{myTitle}</h2>

        <div className="expense-item__price">$ {price}</div>
        <button onClick={updateTitle}>Update Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
