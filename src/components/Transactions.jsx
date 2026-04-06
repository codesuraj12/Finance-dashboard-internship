import React, { useContext, useState } from "react";
import { Appcontext } from "../context/Appcontext";

const Transactions = () => {

  const { transactions, role } = useContext(Appcontext)

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [addtransaction, setAddtransaction] = useState(transactions)  //this is to add new transaction
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    description: "",
    amount: "",
    type: "expense",
    category: "Food",
    date: new Date().toISOString().split("T")[0],
  });

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAdd = () => {
    if (!form.amount || !form.date) {
      setError("Please fill all fields")
      return
    }

    setError("")
    const newTransaction = {
      ...form,
      amount: parseFloat(form.amount),  //string convert into number
      id: addtransaction.length + 1
    }

    setAddtransaction([newTransaction, ...addtransaction])

    setShowModal(false);
    setForm({ description: "", amount: "", type: "expense", category: "Food", date: new Date().toISOString().split("T")[0] });
  };

  // Filter + Search logic
  const filteredData = addtransaction.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Top Controls */}
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
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <i className="fa-solid fa-plus"></i> Add Transaction
          </button>
        )}
      </div>

      {/* Table */}
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
                      <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full font-medium">
                        Admin
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">View only</span>
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


      {/* this form appear when click on add transaction */}

      {showModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[340px] p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-semibold text-gray-800">Add Transaction</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 text-xl">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="flex flex-col gap-3">

              <div>
                <label className="text-xs text-gray-500 mb-1 block">Amount (₹)</label>
                <input name="amount" type="number" placeholder="0"
                  value={form.amount} onChange={handleFormChange}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Date</label>
                <input name="date" type="date" value={form.date} onChange={handleFormChange}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Type</label>
                <select name="type" value={form.type} onChange={handleFormChange}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Category</label>
                <select name="category" value={form.category} onChange={handleFormChange}
                  className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {["Food", "Transport", "Shopping", "Bills", "Health", "Entertainment", "Salary", "Freelance", "Investment", "Gift", "Other"]
                    .map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>


            </div>
            {error && (
  <p className="text-red-500 text-xs mt-2">
    {error}
  </p>
)}
            <div className="flex gap-2 mt-5">
              <button onClick={() =>  {
    setShowModal(false)
    setError("")      
  }}  
                className="flex-1 text-sm border border-gray-200 rounded-lg py-2 text-gray-600 hover:bg-gray-50">
                Cancel
              </button>
              <button onClick={handleAdd}
                className="flex-1 text-sm bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 font-medium">
                Add
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Transactions;