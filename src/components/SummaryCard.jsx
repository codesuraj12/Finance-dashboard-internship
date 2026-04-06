import React, { useContext } from "react";
import { Appcontext } from "../context/Appcontext";

const SummaryCard = ({ title, background }) => {
  

const {transactions} = useContext(Appcontext)

  //  Calculate Income,expense and total balance
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

// Calculating value 
  let value = 0;

  if (title === "Income"){
    value = income;
  } 
  else if (title === "Expenses"){
value = expense;
  } 
  else {
    value = balance;
  }

  return (
    <div className={`${background} border-l-2 hover:border-l-4 shadow rounded-2xl p-4 flex flex-col justify-between h-32 hover:shadow-lg transition transition-all`}>
      
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>

  
      <p
        className={`text-2xl font-bold mt-2 ${
          title === "Expenses"
            ? "text-red-500"
            : title === "Income"
            ? "text-green-500"
            : "text-gray-800"
        }`}
      >
        ₹ {value}
      </p>

 

   

    </div>
  );
};

export default SummaryCard;