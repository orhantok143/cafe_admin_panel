import React, { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign, Clock, User,LoaderCircle, CookingPot, Utensils, HandPlatter, X, Rows3} from "lucide-react";

const statusStyles = {
  "Beklemede": "bg-indigo-100 text-indigo-800",
  "Hazırlanıyor": "bg-yellow-100 text-yellow-800",
  "Hazır": "bg-green-100 text-green-800",
  "Servis Edildi": "bg-blue-100 text-blue-800",
  "İptal": "bg-red-100 text-red-800",
};

const statusIcons={
  "Beklemede":  <Rows3 className="text-blue-500" size={12} />,
  "Hazırlanıyor":  <CookingPot className="text-yellow-500" size={12} />,
  "Hazır": <Utensils className="text-green-500" size={12} />,
  "Servis Edildi": <HandPlatter className="text-blue-500" size={12} />,
  "İptal":<X className="text-red-500" size={12} />,
}

const OrderCard = ({ table,index, orders, totalAmount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div
    onClick={toggleCollapse}
    className="bg-gray-800 text-gray-300 p-4 rounded-xl">
       {/* <span className="bg-blue-800/30 p-1 rounded-sm border text-sm border-blue-400/40" > #{index +1}</span> */}
      <div className="flex justify-between items-center">
        <h4 className="text-md font-bold">Masa {table}</h4>
        <button
          onClick={toggleCollapse}
          className=" bg-blue-300 text-center rounded-sm text-blue-500 cursor-pointer"
        >
          {isOpen ? <ChevronUp className="h-5 w-5 text-center" /> : <ChevronDown  className="h-5 w-5 text-center"/>}
        </button>
      </div>

      <div className="flex justify-between mt-2">
        <div className="flex items-center gap-1">
          <DollarSign className="h-5 w-5 p-0.5 rounded-sm bg-green-200 text-green-800" size={16} />
          <span className= "text-sm text-gray-400" >Toplam Tutar: {totalAmount} <span className = "text-green-400">₺</span></span>
        </div>
      </div>

      {/* Toggle için basit gösterim */}
      {isOpen && (
        <div className="mt-3 space-y-3">
          <hr className="text-gray-500 w-1/2" />
          {orders.map((order, index) => (
            <React.Fragment key={index}>
              <div className="flex justify-between items-center">
                <div>
                  <h5 className="font-medium text-sm">{order.name}</h5>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <User className="w-3 h-3 text-purple-400" size={12} />
                    <span className="text-xs">{order.customer}</span>
                  </div>
                  <p className="flex items-center gap-1 text-xs text-gray-500"><Clock className="text-orange-500" size={12} /> Saat: {order.time}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-500">{statusIcons[order.status]} Durum: {order.status}</p>
                </div>
                <div
                  className={`px-2 py-1 text-[10px] font-semibold rounded-2xl ${statusStyles[order.status]}`}
                >
                  {order.status === "Hazır"
                    ? "Hazır"
                    : order.status === "Hazırlanıyor"
                    ? "Hazırlanıyor"
                    : order.status === "İptal"
                    ? "İptal"
                    : order.status === "Servis Edildi"
                    ? "Servis Edildi"
                    : order.status}
                </div>

                <div className="font-bold px-2 py-1 text-xs text-gray-400">
                  {order.amount} <span className = "text-green-400 font-normal">₺</span>
                </div>
              </div>
              <hr className="text-gray-700" />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderCard;
