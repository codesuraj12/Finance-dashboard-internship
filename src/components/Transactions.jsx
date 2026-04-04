import React, { useContext, useState } from "react";
import { Appcontext } from "../context/Appcontext";

const Transactions = () => {

  const { transactions, role } = useContext(Appcontext)

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // 🔹 Filter + Search logic
  const filteredData = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* 🔹 Top Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        {/* Admin Button */}
        {role === "admin" && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            + Add Transaction
          </button>
        )}
      </div>

      {/* 🔹 Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border rounded-lg overflow-hidden">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((t) => (
                <tr key={t.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{t.date}</td>
                  <td className="p-3">{t.category}</td>
                  <td className="p-3 capitalize">{t.type}</td>
                  <td
                    className={`p-3 font-semibold ${t.type === "expense"
                        ? "text-red-500"
                        : "text-green-500"
                      }`}
                  >
                    ₹ {t.amount}
                  </td>
                  <td className="p-3">
                    {role === "admin" ? (
                      <div className="flex gap-4">
                        <button className="text-blue-500  ">
                          Edit
                        </button>
                        <button className="text-red-500  ">
                          Delete
                        </button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        View only
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-4 text-center text-gray-500" colSpan="5">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Transactions;