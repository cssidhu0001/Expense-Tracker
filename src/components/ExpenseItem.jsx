import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { deleteExpense } = useContext(ExpenseContext);

  return (
    <li className="flex justify-between items-center border-b py-2">
      <div>
        <p className="font-semibold text-gray-700">{expense.title}</p>
        <p className="text-sm text-gray-500">
          {expense.category} • {expense.date}
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-red-500 font-bold">${expense.amount.toFixed(2)}</span>
        <button
          onClick={() => deleteExpense(expense.id)}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
