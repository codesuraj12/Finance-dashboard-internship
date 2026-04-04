import { useContext } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend,
  PieChart, Pie, Cell,
  ResponsiveContainer,
} from "recharts";
import { Appcontext } from "../context/Appcontext";

const COLORS = ["#3b82f6", "#ef4444", "#22c55e", "#f59e0b", "#8b5cf6", "#ec4899"];

const Charts = () => {
  const { transactions } = useContext(Appcontext);

  // ── Line Chart Data ──────────────────────────────────────────
  // Group transactions by month → show Income vs Expense trend
  const monthlyMap = {};

  transactions.forEach((t) => {
    const month = t.date.substring(0, 7); // "2024-04"
    if (!monthlyMap[month]) monthlyMap[month] = { income: 0, expense: 0 };
    monthlyMap[month][t.type] += t.amount;
  });

  const lineData = Object.keys(monthlyMap)
    .sort() // oldest → newest
    .map((m) => {
      const [year, month] = m.split("-");
      const label = new Date(year, month - 1).toLocaleString("en", { month: "short" }); // "Feb"
      return {
        month: label,
        Income: monthlyMap[m].income,
        Expense: monthlyMap[m].expense,
      };
    });

  // ── Pie Chart Data ───────────────────────────────────────────
  // Sum expenses per category
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense")
      categoryMap[t.category] = (categoryMap[t.category] || 0) + t.amount;
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // ── Render ───────────────────────────────────────────────────
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-6">

      {/* Line Chart — Monthly Income vs Expense */}
      <div className="w-full bg-white rounded-2xl shadow-sm p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Balance Trend</h3>
        <p className="text-xs text-gray-400 mb-4">Monthly income vs expenses</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false}
              tickFormatter={(v) => `₹${v / 1000}K`} />
            <Tooltip formatter={(v, name) => [`₹${v.toLocaleString("en-IN")}`, name]} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="Income" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
            <Line type="monotone" dataKey="Expense" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart — Spending by Category */}
      <div className="w-full bg-white rounded-2xl shadow-sm p-5">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Spending Breakdown</h3>
        <p className="text-xs text-gray-400 mb-4">Expenses by category</p>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={true}
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => [`₹${v.toLocaleString("en-IN")}`]} />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;