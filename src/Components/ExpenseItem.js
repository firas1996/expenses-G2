import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ title, price, date }) => {
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={date} />
      </div>
      <div className="expense-item__description">
        {/* {console.log("2", myTitle)} */}
        <h2>{title}</h2>

        <div className="expense-item__price">$ {price}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
