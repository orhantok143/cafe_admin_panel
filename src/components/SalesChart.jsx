import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ['Cash', 'Credit Card', 'Expense'],
    datasets: [
      {
        data: [50, 30, 20], // orantı: toplam 100 olmalı
        backgroundColor: ['#3B82F6', '#22C55E', '#EF4444'], // Tailwind renkleri
        borderWidth: 0,
        cutout: '70%', // iç boşluk oranı
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full sm:w-64 h-64 bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-center justify-center gap-4 mt-4">
      <h2 className="text-sm font-semibold text-gray-100">Daily Revenue</h2>
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-100">
          100%
        </div>
      </div>
      <div className="flex gap-4 mt-2 text-sm">
        <LegendItem color="bg-blue-500" label="Cash" />
        <LegendItem color="bg-green-500" label="Credit Card" />
        <LegendItem color="bg-red-500" label="Expense" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-1">
    <span className={`w-3 h-3 rounded-full ${color}`}></span>
    <span className="text-gray-300">{label}</span>
  </div>
);

export default SalesChart;
