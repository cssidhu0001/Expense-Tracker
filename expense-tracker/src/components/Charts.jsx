import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const Charts = () => {
  const { expenses } = useContext(ExpenseContext);

  // 🧮 Category-wise total calculation
  const categoryTotals = expenses.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  // 💰 Format as Indian Rupee
  const formatCurrency = (amount) =>
    `₹${amount.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.keys(categoryTotals).length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No data to show chart
        </p>
      ) : (
        Object.entries(categoryTotals).map(([category, total]) => (
          <div
            key={category}
            className="bg-gradient-to-r from-blue-100 to-indigo-100 p-5 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <h3 className="font-semibold text-gray-700 text-lg mb-1">
              {category}
            </h3>
            <p className="text-2xl font-bold text-blue-700">
              {formatCurrency(total)}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Charts;
