import React, { useState } from "react";
import { format } from "date-fns";

const DateRangePicker = () => {
  // Başlangıç ve bitiş tarihi durumları
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [period, setPeriod] = useState("Bugün");

  // Tarih formatı için fonksiyon
  const formatDate = (date) => format(date, "yyyy-MM-dd HH:mm");

  // Periyot değiştirme fonksiyonu
  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  // Tarih değişim fonksiyonu
  const handleDateChange = (type, value) => {
    if (type === "start") {
      setStartDate(new Date(value));
    } else {
      setEndDate(new Date(value));
    }
  };

  return (
    <div className="w-full mx-auto rounded-lg bg-gray-800 text-white py-4 px-3 shadow-lg">
      {/* Başlık */}
      {/* <h3 className="text-xl font-medium text-gray-200 mb-4">Select Date Range</h3> */}

      {/* Periyot Seçimi (Butonlar) */}
      <div className="flex justify-between mb-6">
        {["Bugün", "Dün", "Hafta", "Ay", "Yıl"].map((option) => (
          <button
            key={option}
            onClick={() => handlePeriodChange(option)}
            className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
              period === option
                ? "bg-teal-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-teal-400"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      {/* Tarih Seçici Alanları */}
      <div className="grid grid-cols-2 justify-between gap-2">
        {/* Başlangıç Tarihi */}
        <div>
          <label className="block text-sm text-gray-300">Start Date</label>
          <input
            type="datetime-local"
            value={formatDate(startDate)}
            onChange={(e) => handleDateChange("start", e.target.value)}
            className="mt-2 h-10 w-full text-xs px-4 py-3 rounded-lg border border-gray-600 text-gray-100 bg-gray-700 focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Bitiş Tarihi */}
        <div>
          <label className="block text-sm text-gray-300">End Date</label>
          <input
            type="datetime-local"
            value={formatDate(endDate)}
            onChange={(e) => handleDateChange("end", e.target.value)}
            className="mt-2 h-10 w-full text-xs p-4 rounded-lg border border-gray-600 text-gray-100 bg-gray-700 focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
