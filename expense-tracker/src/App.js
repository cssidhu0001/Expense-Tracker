import React from "react";
import ExpenseProvider from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import Charts from "./components/Charts";

function App() {
  return (
    <ExpenseProvider>
      <div className="relative min-h-screen overflow-hidden text-gray-800">
        {/* 🔥 Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-slow"></div>

        {/* Semi-transparent overlay for readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* Main Content */}
        <div className="relative z-10 p-6">
          {/* 🧭 Header Section */}
          <header className="text-center mb-10">
            <h1 className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-md animate-pulse">
              💰 CashFlowr
            </h1>
            <p className="text-gray-700 text-lg font-medium tracking-wide">
              Smart Expense Management & Insightful Analytics
            </p>
            <div className="mt-3 flex justify-center">
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold shadow-sm">
                #TrackYourMoney #StayInControl
              </span>
            </div>
          </header>

          {/* 💼 Main Sections */}
          <main>
            <section className="mb-6">
              <Summary />
            </section>
            <section className="max-w-2xl mx-auto mb-6">
              <ExpenseForm />
            </section>
            <section className="max-w-3xl mx-auto mb-6">
              <ExpenseList />
            </section>
            <section className="max-w-4xl mx-auto">
              <Charts />
            </section>
          </main>

          {/* ⚙️ Footer */}
          <footer className="text-center mt-12 text-sm text-gray-600">
            <hr className="border-gray-300 mb-4" />
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-blue-700">Karan Joshi</span> — Built with 💖 for smarter expense tracking
            </p>
          </footer>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
