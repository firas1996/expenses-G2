import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ({ getData }) => {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [date, setDate] = useState("");
  const [data, setData] = useState({
    title: "",
    price: "",
    date: "",
  });
  function titleChangeHandler(event) {
    setData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  }
  function priceChangeHandler(event) {
    // setPrice(event.target.value);
    setData((prevState) => {
      return { ...prevState, price: event.target.value };
    });
  }
  function dateChangeHandler(event) {
    // setDate(event.target.value);
    setData((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: data.title,
      price: data.price,
      date: new Date(data.date),
    };
    getData(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0"
            step="0.001"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
