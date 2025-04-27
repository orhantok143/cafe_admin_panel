import { useState } from "react";

const TableCard = ({ table }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  const statusColor = {
    success: "bg-green-600 border-green-600",
    danger: "bg-red-600 border-red-600",
    warning: "bg-yellow-500 border-yellow-600",
    info: "bg-blue-500 border-blue-600",
  };

  const statusStyles = {
    "Beklemede": "bg-pink-100 text-pink-800",
    "Hazırlanıyor": "bg-yellow-100 text-yellow-800",
    "Hazır": "bg-green-100 text-green-800",
    "Teslim Edildi": "bg-blue-100 text-blue-800",
  };

  return (
    <div
      className={`rounded-xl shadow-md mb-4 overflow-hidden border border-gray-700`}
    >
      <div
        onClick={toggleCollapse}
        className={`cursor-pointer rounded-xl border p-3 flex justify-between items-center ${
          statusColor[table.status] || "bg-gray-700"
        }`}
      >
        <div className="text-gray-100 font-bold text-md">{table.name}</div>
        <div className="text-xs text-gray-200">
          Açılış: {table.openedAt} | Toplam: {table.total} TL
        </div>
      </div>

      {isOpen && (
        <div className="bg-gray-800 p-2 space-y-2">
          {table.orders.map((order, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-700 rounded-md p-2"
            >
              <div>
                <div className="text-gray-200 text-[12px] font-semibold">{order.name}</div>
                <div className="text-gray-400 text-[10px] ">
                  Süre: {order.duration} dk | Adet: {order.qty}
                </div>
              </div>
              <div
                className={`px-2 py-1 text-[10px] font-semibold rounded-2xl ${
                  statusStyles[order.status]
                }`}
              >
                {order.status === "Hazır"
                  ? "Hazır"
                  : order.status === "Hazırlanıyor"
                  ? "Hazırlanıyor"
                  : order.status === "İptal"
                  ? "İptal"
                  : order.status}
              </div>

              <div className="font-bold px-2 py-1 text-xs text-gray-300">
                {order.total} TL
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableCard;
