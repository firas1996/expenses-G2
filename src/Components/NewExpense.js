import React from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ getData }) => {
  return (
    <div className="new-expense">
      <NewExpenseForm getData={getData} />
    </div>
  );
};

export default NewExpense;
