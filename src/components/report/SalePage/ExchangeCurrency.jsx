import React, { useEffect, useState } from "react";
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";

const ExchangeCurrency = ({ currency }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Komponent mount olduktan sonra görünürlüğü başlat
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`flex items-center justify-between gap-2 border px-2 py-1 ${
        currency.changeRate < 0
          ? "bg-red-600/6  border-red-500/10"
          : "bg-green-600/6 border-green-500/10"
      } rounded-sm`}
    >
      {/* sol */}
      <div
        className={`flex flex-col items-center gap-1  text-center text-xs transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        } ${currency.changeRate < 0 ? "text-red-500" : "text-green-500"}`}
      >
        <span className="text-[14px] text-center">{currency.icon}</span>
        <h2 className="font-semibold text-[10px]">{currency.pair}</h2>
      </div>
      {/* sağ */}
      <div
        className={`flex flex-col items-end gap-1  ${
          currency.changeRate < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        <div className="flex gap-1 text-[12px]">
          {" "}
          {currency.changeRate < 0 ? <IoMdTrendingDown /> : <IoMdTrendingUp />}
          <span className="text-[10px]">%{currency.changeRate}</span>
        </div>
        <span className="text-[10px]">{currency.value}₺</span>
      </div>
    </div>
  );
};

export default ExchangeCurrency;
