import React from "react";

const cardStyles = {
  wrapper: "flex-1 p-5 rounded-xl bg-gray-800 shadow-md flex items-center gap-4",
  iconBox: "p-3 rounded-full bg-gray-700 text-blue-400",
  textBox: "flex flex-col",
  label: "text-sm text-gray-400",
  value: "text-xl font-bold text-white",
};

const ExpenseCard = ({ icon: Icon, label, value }) => {
  return (
    <div className={cardStyles.wrapper}>
      <div className={cardStyles.iconBox}>
        <Icon size={24} />
      </div>
      <div className={cardStyles.textBox}>
        <span className={cardStyles.label}>{label}</span>
        <span className={cardStyles.value}>{value} ₺</span>
      </div>
    </div>
  );
};

export default ExpenseCard;
