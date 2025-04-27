import {
  CircleCheck,
  CircleCheckBig,
  CircleX,
  DollarSign,
  Layers,
  LoaderCircle,
  Package,
} from "lucide-react";
import React from "react";

const OrderCard = ({ data }) => {
  const {
    name,
    category,
    subCategory,
    price,
    quantity,
    totalAmount,
    table,
    orderedBy,
  } = data;
  const formatedPrice = new Intl.NumberFormat("tr-TR").format(price);
  const formatedTotalAmount = new Intl.NumberFormat("tr-TR").format(
    totalAmount
  );

  return (
    <div className={`bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col gap-4 border-2
      ${data.status === "Ödendi" ? "border-green-500" : 
        data.status === "Beklemede" ? "border-yellow-500" :
        data.status === "Iptal Edildi" ? "border-red-500 border-0" : ""}`}>
    
      {data.status === "Ödendi" ? (
        <div className="flex items-center gap-1 text-green-500">
          <CircleCheckBig /> Ödendi{" "}
        </div>
      ) : data.status === "Iptal Edildi" ? (
        <div className="flex items-center gap-1 text-red-500">
          <CircleX /> Iptal Edildi{" "}
        </div>
      ) : (
        <div className="flex items-center gap-1 text-yellow-500">
          <LoaderCircle /> Beklemede{" "}
        </div>
      )}

      <div className="flex justify-between items-center">
        <h3 className="text-gray-200 font-semibold text-md">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-xs">{table}</span>
          <span className="text-gray-400 text-xs">|</span>
          <span className="text-gray-400 text-xs">{orderedBy}</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px] ">
        <div className="flex items-center gap-2 text-gray-400">
          <Layers
            size={20}
            className="bg-green-500/10 p-1 text-green-700 rounded-sm"
          />
          <span>
            {category} / {subCategory}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <Package
            size={20}
            className="bg-blue-500/10 p-1 text-blue-700 rounded-sm"
          />
          <span>{quantity} adet</span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[12px]">
        <div className="flex items-center gap-2 text-gray-400">
          <DollarSign
            size={20}
            className="bg-red-500/10 p-1 text-red-700 rounded-sm"
          />
          <span>{formatedPrice}₺</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <DollarSign
            size={20}
            className="bg-orange-500/10 p-1 text-orange-700 rounded-sm"
          />
          <span>{formatedTotalAmount}₺</span>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
