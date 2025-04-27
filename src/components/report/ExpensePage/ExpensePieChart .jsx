import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpensePieChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderWidth: 1,
      },
    ],
  };

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  plugins: {
    tooltip: {
      enabled: false, // Hover'da çıkan bilgileri kapatır
    },
    legend: {
      display: false, // Sağda çıkan kategori listesi
    },
    datalabels: {
      display: true, // Eğer "chartjs-plugin-datalabels" eklendiyse, bunu da kapat
    },
  },
};

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-4">
      <div className="w-full md:w-1/2">
      <Doughnut data={chartData} options={options}/>
      </div>
      <div className="w-full md:w-1/2 space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full inline-block"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="text-gray-200">{item.label}</span>
            </div>
            <span className="font-bold text-white">{item.value} ₺</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensePieChart;
