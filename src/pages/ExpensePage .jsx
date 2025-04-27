import React, { useState } from "react";
import ExpenseBtn from "../components/report/ExpensePage/ExpenseBtn";
import { ExpenseCardList } from "../components/report/ExpensePage/ExpenseCardList ";
import ExpenseHeader from "../components/report/ExpensePage/ExpenseHeader ";
import ExpensePieChart from "../components/report/ExpensePage/ExpensePieChart ";
import ExpenseSummary from "../components/report/ExpensePage/ExpenseSummary ";
import AddExpense from "../components/report/ExpensePage/AddExpense";

// const AddExpense = React.lazy(() => import("../components/report/ExpensePage/AddExpense"));
const expenseData = [
  { label: "Maaş", value: 12000, color: "#3B82F6" }, // Blue
  { label: "Elektrik", value: 3500, color: "#F59E0B" }, // Amber
  { label: "Doğalgaz", value: 2800, color: "#EF4444" }, // Red
  { label: "Su", value: 1200, color: "#06B6D4" }, // Cyan
  { label: "Kira", value: 8000, color: "#8B5CF6" }, // Purple
  { label: "Market", value: 2200, color: "#10B981" }, // Green
  { label: "Kasap", value: 1500, color: "#EC4899" }, // Pink
  { label: "Toptancılar", value: 3000, color: "#EAB308" }, // Yellow
  { label: "Diğer", value: 1000, color: "#9CA3AF" }, // Gray
];
const expenseList = [
  {
    id: 1,
    type: "Elektrik",
    amount: 3500,
    date: "2025-04-22",
    note: "Fatura ödemesi",
    color: "#F59E0B",
  },
  {
    id: 2,
    type: "Maaş",
    amount: 12000,
    date: "2025-04-01",
    note: "Mart maaşı",
    color: "#3B82F6",
  },
  {
    id: 3,
    type: "Su",
    amount: 1200,
    date: "2025-04-20",
    note: "Belediye su faturası",
    color: "#06B6D4",
  },
  {
    id: 4,
    type: "Market",
    amount: 2100,
    date: "2025-04-21",
    note: "Mutfak alışverişi",
    color: "#10B981",
  },
];

export const ExpensePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCafeExpenses, setCafeExpenses] = useState(false);
  return (
    <div>
      <ExpenseHeader />
      <ExpensePieChart data={expenseData} />
      <ExpenseBtn setCafeExpenses={setCafeExpenses} />

      {isCafeExpenses ? (
        <ExpenseCardList
          expenses={expenseList}
          onAddClick={() => setIsOpen(true)} // onClick tetiklendiğinde
        />
      ) : (
        <ExpenseSummary />
      )}

      {/* Burada isOpen kontrolü yapalım */}
      <AddExpense isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
