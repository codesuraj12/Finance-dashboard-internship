import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const Insights = () => {
  const { transactions } = useContext(Appcontext);

  // 🔹 Income & Expense
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  // 🔹 Category-wise expense
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  // 🔹 Highest category
  let highestCategory = "N/A";
  let maxAmount = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > maxAmount) {
      maxAmount = categoryMap[key];
      highestCategory = key;
    }
  }

  // 🔹 Savings %
  const savingsRate =
    income > 0 ? (((income - expense) / income) * 100).toFixed(0) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

      {/* 🔹 Top Spending */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-sm text-gray-500">TOP SPENDING CATEGORY</p>
        <h2 className="text-xl font-semibold mt-1">
          {highestCategory}
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          ₹{maxAmount.toLocaleString()} spent
        </p>

        {Object.keys(categoryMap).map((key, i) => (
          <div key={i} className="mb-2">
            <div className="flex justify-between text-sm">
              <span>{key}</span>
              <span>₹{categoryMap[key]}</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded mt-1">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{
                  width: `${(categoryMap[key] / maxAmount) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Savings Rate */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-sm text-gray-500">SAVINGS RATE</p>
        <h2 className="text-2xl font-bold text-green-600 mt-2">
          {savingsRate}%
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          of total income saved
        </p>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${savingsRate}%` }}
          />
        </div>
      </div>

      {/* 🔹 Income vs Expense */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <p className="text-sm text-gray-500">INCOME VS EXPENSE</p>

        <div className="mt-3 text-sm">
          <p>
            Income:{" "}
            <span className="text-green-600 font-semibold">
              ₹{income}
            </span>
          </p>
          <p>
            Expense:{" "}
            <span className="text-red-500 font-semibold">
              ₹{expense}
            </span>
          </p>
        </div>

        <p className="mt-3 text-sm">
          {expense > income ? (
            <span className="text-red-500">
              ⚠️ Overspending
            </span>
          ) : (
            <span className="text-green-600">
              ✅ Saving money
            </span>
          )}
        </p>
      </div>

    </div>
  );
};

export default Insights;