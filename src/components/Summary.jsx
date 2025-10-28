import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Summary = () => {
  const { expenses } = useContext(ExpenseContext);

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-semibold text-gray-700">Total Expenses</h3>
        <p className="text-xl font-bold text-red-500">${totalExpenses.toFixed(2)}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-semibold text-gray-700">Number of Expenses</h3>
        <p className="text-xl font-bold text-blue-500">{expenses.length}</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-semibold text-gray-700">Average Expense</h3>
        <p className="text-xl font-bold text-green-500">
          ${expenses.length ? (totalExpenses / expenses.length).toFixed(2) : 0}
        </p>
      </div>
    </div>
  );
};

export default Summary;
