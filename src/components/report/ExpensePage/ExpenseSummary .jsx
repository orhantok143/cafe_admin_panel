import React from "react";
import ExpenseCard from "./ExpenseCard";
import { Coins, Package, FileText, MoreHorizontal } from "lucide-react";

const ExpenseSummary = () => {
  const expenses = [
    { label: "Toplam Gider", value: "35.000", icon: Coins },
    { label: "Malzeme Gideri", value: "15.000", icon: Package },
    { label: "Fatura Gideri", value: "12.000", icon: FileText },
    { label: "Diğer", value: "8.000", icon: MoreHorizontal },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      {expenses.map((item, i) => (
        <ExpenseCard key={i} {...item} />
      ))}
    </div>
  );
};

export default ExpenseSummary;
