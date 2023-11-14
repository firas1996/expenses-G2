import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      date: new Date(2023, 9, 26),
      title: "Education",
      price: 6999,
    },
    {
      id: "e2",
      date: new Date(2021, 4, 13),
      title: "Voyage",
      price: 1500,
    },
    {
      id: "e3",
      date: new Date(2023, 1, 1),
      title: "Nouriture",
      price: 500,
    },
    {
      id: "e4",
      date: new Date(2022, 12, 30),
      title: "Mantenance",
      price: 1234,
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
