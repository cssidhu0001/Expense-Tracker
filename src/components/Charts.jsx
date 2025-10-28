import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Charts = () => {
  const { expenses } = useContext(ExpenseContext);

  // Simple category-wise summary
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.keys(categoryTotals).length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">No data to show chart</p>
      ) : (
        Object.entries(categoryTotals).map(([category, total]) => (
          <div
            key={category}
            className="bg-white p-4 rounded shadow text-center"
          >
            <h3 className="font-semibold text-gray-700">{category}</h3>
            <p className="text-xl font-bold text-blue-600">${total.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Charts;
