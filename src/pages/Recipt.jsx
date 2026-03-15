import React from "react";

const Receipt = ({ expense, deleteExpense }) => {

  if (!expense) {
    return (
      <div className="p-4 border rounded">
        Click an expense to view receipt
      </div>
    );
  }

  return (
    <div className="p-4 border rounded bg-gray-50">

      <h2 className="text-xl font-bold mb-3">
        Expense Receipt
      </h2>

      <p><strong>Title:</strong> {expense.title}</p>
      <p><strong>Amount:</strong> ₹{expense.amount}</p>
      <p><strong>Category:</strong> {expense.category}</p>
      <p><strong>Date:</strong> {expense.date}</p>

      <button
        onClick={() => deleteExpense(expense.id)}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete Expense
      </button>

    </div>
  );
};

export default Receipt;