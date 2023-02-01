import Expense from "./components/Expense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 200, date: new Date(2023, 2, 2) },
    { title: "Home Insurance", amount: 130, date: new Date(2022, 2, 2) },
    { title: "Car Insurance", amount: 400, date: new Date(2021, 5, 2) },
    { title: "Car Insurance", amount: 600, date: new Date(2023, 6, 4) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense items={expenses} />
    </div>
  );
}

export default App;
