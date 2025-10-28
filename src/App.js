import React from "react";
import ExpenseProvider from "./context/ExpenseContext"; // Default import
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Charts from "./components/Charts";

function App() {
  return (
    <ExpenseProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">💰 Personal Expense Tracker</h1>
          <p className="text-gray-600">Track your expenses, see summaries & charts</p>
        </header>

        <section className="mb-6"><Summary /></section>
        <section className="max-w-2xl mx-auto mb-6"><ExpenseForm /></section>
        <section className="max-w-3xl mx-auto mb-6"><ExpenseList /></section>
        <section className="max-w-4xl mx-auto"><Charts /></section>
      </div>
    </ExpenseProvider>
  );
}

export default App;
