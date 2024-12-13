import React, { useState } from 'react';
import Comptes from './Comptes';
import Transactions from './Transactions';

function App() {
  const [showComptes, setShowComptes] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);

  // Display accounts
  const handleComptesClick = () => {
    setShowComptes(true);
    setShowTransactions(false);
  };

  // Display Transactions
  const handleTransactionsClick = () => {
    setShowTransactions(true);
    setShowComptes(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 bg-black bg-opacity-80 shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-1xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 hover:text-white transition">
            Account Management 
          </h1>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 space-y-8">
        <h1 className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 animate-pulse">
          Let's Manage Your Accounts and Transactions
        </h1>

        <div className="space-x-6">
          <button
            onClick={handleComptesClick}
            className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg transform hover:scale-110 transition"
          >
            View Accounts
          </button>
          <button
            onClick={handleTransactionsClick}
            className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 shadow-lg transform hover:scale-110 transition"
          >
            View Transactions
          </button>
        </div>
      </section>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10 space-y-10">
        {showComptes && (
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">
              Account Details
            </h2>
            <Comptes />
          </div>
        )}
        {showTransactions && (
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-pink-400 mb-4">
              Transaction Details
            </h2>
            <Transactions />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-80 py-6">
        <div className="container mx-auto text-center text-gray-500">
          &copy; 2024 Account Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
