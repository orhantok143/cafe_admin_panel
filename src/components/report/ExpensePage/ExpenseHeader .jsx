import React, { useState } from "react";
import { CalendarRange, BarChart2 } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseHeader = () => {
  const [startDate, setStartDate] = useState(new Date(new Date().setHours(7, 0, 0, 0)));
  const [endDate, setEndDate] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState("Günlük");

  const rangeOptions = ["Günlük", "Haftalık", "Aylık", "Yıllık"];

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-4">
      <div className="flex flex-col items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-gray-100 flex items-center gap-2">
          <BarChart2 className="text-blue-400" />
          Giderler
        </h2>

        <div className="">
          <div className="w-full flex items-center gap-1 text-white p-2 rounded-lg">
            <CalendarRange size={25} className="text-blue-400" />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              className="w-full text-gray-300 text-sm p-2 rounded-2xl focus:outline-none  bg-gray-700"
            />
            {/* <span className=" mx-1 text-gray-400">-</span> */}
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              className="w-full text-gray-300 text-sm p-2 rounded-2xl focus:outline-none  bg-gray-700"
            />
          </div>

          <div className="flex gap-2 mt-2">
            {rangeOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedRange(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedRange === option
                    ? "bg-blue-600 text-gray-100"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseHeader;
