import React, { useState, useEffect } from "react";
import AddExpenses from "./AddExpenses";
import Receipt from "./Recipt";
import authService from "../appwrite/auth";

const Home = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        setUser(userData);

        const saved = localStorage.getItem("expenses");
        const parsed = saved ? JSON.parse(saved) : [];

        const userExpenses = parsed.filter(
          (exp) => exp.userId === userData.$id
        );

        setExpenses(userExpenses);
      }
    });
  }, []);

  const addExpense = (expense) => {
    const saved = localStorage.getItem("expenses");
    const allExpenses = saved ? JSON.parse(saved) : [];

    const newExpense = {
      ...expense,
      userId: user.$id,
    };

    const updatedAllExpenses = [...allExpenses, newExpense];

    localStorage.setItem("expenses", JSON.stringify(updatedAllExpenses));

    const userExpenses = updatedAllExpenses.filter(
      (exp) => exp.userId === user.$id
    );

    setExpenses(userExpenses);
  };

  // 🔴 Delete Expense
  const deleteExpense = (id) => {

    const saved = localStorage.getItem("expenses");
    const allExpenses = saved ? JSON.parse(saved) : [];

    const updatedAllExpenses = allExpenses.filter((exp) => exp.id !== id);

    localStorage.setItem("expenses", JSON.stringify(updatedAllExpenses));

    const userExpenses = updatedAllExpenses.filter(
      (exp) => exp.userId === user.$id
    );

    setExpenses(userExpenses);
    setSelectedExpense(null);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6 text-purple-700">
        Expense Dashboard
      </h1>

      <AddExpenses addExpense={addExpense} />

      <h2 className="text-xl mt-6 mb-3 font-semibold">
        Expenses List
      </h2>

      <ul className="space-y-2">
        {expenses.map((exp) => (
          <li
            key={exp.id}
            className="border p-3 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => setSelectedExpense(exp)}
          >
            {exp.title} - ₹{exp.amount}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Receipt 
          expense={selectedExpense} 
          deleteExpense={deleteExpense}
        />
      </div>

    </div>
  );
};

export default Home;