import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { AiFillDollarCircle, AiFillEuroCircle, AiFillGold } from "react-icons/ai";
import ExchangeCurrency from "../components/report/SalePage/ExchangeCurrency";
import { OccupancyCard } from "../components/report/SalePage/OccupancyCard ";
import { TablePerformanceList } from "../components/report/SalePage/TablePerformanceList";
import { ProductPerformanceList } from "../components/report/SalePage/ProductPerformanceList";
import { EmployeePerformanceList } from "../components/report/SalePage/EmployeePerformanceList ";
import { AccountPerformanceList } from "../components/report/SalePage/AccountPerformanceList ";
import TableCard from "../components/report/SalePage/TableCard";
import DateRangePicker from "../components/report/SalePage/DateRangePicker ";


const financeData = [
  { name: "Nakit", value: 12000, color: "#34d399" },
  { name: "Kart", value: 18000, color: "#60a5fa" },
  { name: "Masraf", value: 5000, color: "#fbbf24" },
  { name: "Avans", value: 3000, color: "#f87171" },
];

const COLORS = ["#34d399", "#60a5fa", "#fbbf24", "#f87171"];

const waiterPerformance = [
  { name: "Ahmet", sales: 12000 },
  { name: "Zeynep", sales: 15500 },
  { name: "Mehmet", sales: 8000 },
  { name: "Ayşe", sales: 10000 },
];

const tables = [
  {
    name: "Masa 1",
    openedAt: "12:45",
    total: 320,
    status: "info", // "success", "danger", "warning"
    orders: [
      {
        name: "Lahmacun",
        duration: 15,
        qty: 2,
        total: 100,
        status: "Teslim Edildi",
      },
      {
        name: "Ayran",
        duration: 10,
        qty: 1,
        total: 20,
        status: "Hazırlanıyor",
      },
    ],
  },
  {
    name: "Masa 3",
    openedAt: "12:45",
    total: 220,
    status: "success", // "success", "danger", "warning"
    orders: [
      {
        name: "Lahmacun",
        duration: 15,
        qty: 2,
        total: 100,
        status: "Beklemede",
      },
      {
        name: "Ayran",
        duration: 10,
        qty: 1,
        total: 20,
        status: "Hazır",
      },
    ],
  },
];

const regions = [
  "Açık Masalar",
  "Salon",
  "Teras",
  "Zemin",
  "Kapalı Masalar",
  "Boş Masalar",
];
const currencies = [
  {
    name: "Dolar",
    code: "USD",
    pair: "USD/TRY",
    icon: <AiFillDollarCircle />,
    value: 32.45, // Güncel fiyat
    changeRate: -0.15, // Yüzde değişim (%), negatifse düşüş
  },
  {
    name: "Euro",
    code: "EUR",
    pair: "EUR/TRY",
    icon: <AiFillEuroCircle />,
    value: 34.87,
    changeRate: 0.27,
  },
  {
    name: "Altın",
    code: "XAU",
    pair: "XAU/TRY",
    icon: <AiFillGold />,
    value: 2450.75,
    changeRate: 0.45,
  },
];

const tableData = [
  {
    id: 1,
    name: "Table 6",
    orders: 12,
    updatedAt: "Bugün",
    totalSpend: 480,
    status: "Dolu",
    occupiedDuration: "1s 10dk",
    idleDuration: "40dk",
    timesOpened: 14,
    timesClosed: 13,
  },
  {
    id: 2,
    name: "Table 1",
    orders: 10,
    updatedAt: "1 saat önce",
    totalSpend: 370,
    status: "Rezerve",
    occupiedDuration: "45dk",
    idleDuration: "15dk",
    timesOpened: 11,
    timesClosed: 11,
  },
  {
    id: 3,
    name: "Table 4",
    orders: 8,
    updatedAt: "2 saat önce",
    totalSpend: 320,
    status: "Boş",
    occupiedDuration: "—",
    idleDuration: "2s 15dk",
    timesOpened: 9,
    timesClosed: 9,
  },
];

const products = [
  {
    id: 1,
    name: "Pizza Margherita",
    category: "Yemek",
    subCategory: "Ana Yemek",
    orders: 150,
    tables: 5,
    totalIncome: 4500,
    avgOrderTime: "20",
    status: "Aktif",
    timesOpened: 30,
    timesClosed: 15,
    idleDuration: "10 Saat",
    updatedAt: "2025-04-21",
  },
  {
    id: 2,
    name: "Çikolatalı Kek",
    category: "Tatlı",
    subCategory: "Tatlılar",
    orders: 120,
    tables: 4,
    totalIncome: 1800,
    avgOrderTime: "25",
    status: "Aktif",
    timesOpened: 45,
    timesClosed: 20,
    idleDuration: "8 Saat",
    updatedAt: "2025-04-20",
  },
  {
    id: 3,
    name: "Americano",
    category: "İçecek",
    subCategory: "Kahve",
    orders: 180,
    tables: 6,
    totalIncome: 3600,
    avgOrderTime: "10",
    status: "Aktif",
    timesOpened: 50,
    timesClosed: 25,
    idleDuration: "12 Saat",
    updatedAt: "2025-04-18",
  },
  {
    id: 4,
    name: "Coca Cola",
    category: "İçecek",
    subCategory: "Sıcak İçecekler",
    orders: 100,
    tables: 7,
    totalIncome: 700,
    avgOrderTime: "15",
    status: "Aktif",
    timesOpened: 25,
    timesClosed: 10,
    idleDuration: "5 Saat",
    updatedAt: "2025-04-19",
  },
  {
    id: 5,
    name: "Spaghetti Bolognese",
    category: "Yemek",
    subCategory: "Ana Yemek",
    orders: 130,
    tables: 3,
    totalIncome: 3900,
    avgOrderTime: "30",
    status: "Aktif",
    timesOpened: 35,
    timesClosed: 18,
    idleDuration: "7 Saat",
    updatedAt: "2025-04-22",
  },
];

const occupancyData = {
  current: 14,  // Dolu masalar
  total: 20,    // Toplam masa sayısı
};


const ReportPage = () => {
  

  const [dataTime, setTimeData] = useState({
    startDataTime: "",
    endDataTime: "",
  });
  const [activeRegion, setActiveRegion] = useState("Açık Masalar"); // varsayılan olarak ilk region

  const handleSetDate = (e) => {
    const { id, value } = e.target;

    setTimeData((prev) => ({
      ...prev,
      [id === "start-date" ? "startDataTime" : "endDataTime"]: value,
    }));
  };

  return (
    <>

      <div className="w-full flex gap-2 not-last:mb-4 items-center rounded-2xl text-gray-300">
        {currencies.map((currency, i) => (
          <ExchangeCurrency key={i} currency={currency} />
        ))}
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <DateRangePicker/>
        <OccupancyCard current={occupancyData.current} total={occupancyData.total}/>
        {/* Sol: Pie Chart */}
        <div className="bg-gray-800 shadow-lg rounded-2xl p-4">
          {/* Başlık ve Tarih Aralığı */}
          <div className="mb-4 gap-4">
           
              <h2 className="sm:text-2xl text-lg font-bold text-gray-200 text-center ">
                Ciro
              </h2>
            
          

          </div>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={financeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={({ name }) => name}
              >
                {financeData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Alt Açıklamalar */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            {financeData.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-md"
              >
                <div className="flex items-center space-x-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-medium text-gray-300 sm:text-md text-sm">
                    {item.name}
                  </span>
                </div>
                <span className="font-bold text-gray-300 sm:text-md text-xs">
                  {item.value.toLocaleString()} TL
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ: Garson Performans Listesi */}
        {/* <div className="bg-gray-800 shadow-lg rounded-2xl p-4">
          <h2 className="sm:text-xl text-lg font-bold mb-4 text-center text-gray-200">
            Personel Performansı
          </h2>
          <ul className="space-y-3">
            {waiterPerformance.map((waiter, index) => (
              <div key={index}>
                <li className="flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition rounded-lg px-4 py-2">
                  <span className="font-medium text-gray-300">
                    {waiter.name}
                  </span>
                  <span className="font-bold text-indigo-300 text-sm">
                    {waiter.sales.toLocaleString()} TL
                  </span>
                </li>
                <hr className="w-full text-gray-300/10 active:not-last" />
              </div>
            ))}
          </ul>
        </div> */}

        <TablePerformanceList data={tableData} />
        <ProductPerformanceList data={products}/>
        <EmployeePerformanceList/>
        <AccountPerformanceList/>

        {/* Masa Alanı */}
        <div className="bg-gray-800 shadow-lg rounded-2xl p-4">
          <div className="flex justify-between gap-2 overflow-x-auto p-2 scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden">
            {regions.map((region, i) => (
              <button
                key={i}
                onClick={() => setActiveRegion(region)}
                className={`btn btn-sm rounded-2xl text-xs mb-4 transition-all ${
                  activeRegion === region
                    ? "bg-red-600 text-gray-100"
                    : "btn-outline text-gray-300"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
          {tables.map((table, i) => (
            <TableCard key={i} table={table} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReportPage;
