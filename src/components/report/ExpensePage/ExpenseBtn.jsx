import { Wallet, Coffee } from "lucide-react";
import React from "react";


const ExpenseBtn = ({setCafeExpenses}) => {
    const handleToCafeExpenses = ()=>{
        setCafeExpenses(true)
    }
    const handleToTotalExpenses = ()=>{
        setCafeExpenses(false)
    }
  return (
    <div className="flex gap-4 mb-4 ">
      <button
      onClick={handleToTotalExpenses}
      className="flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:brightness-110 transition">
        <Wallet className="w-5 h-5" />
        Kasa Gideri
      </button>

      <button
      onClick={handleToCafeExpenses}
      className="flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-rose-600 to-pink-700 hover:brightness-110 transition">
        <Coffee className="w-5 h-5" />
        Kafe Gideri
      </button>
    </div>
  );
};

export default ExpenseBtn;
