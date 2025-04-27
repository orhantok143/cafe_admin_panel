import { Pencil, Trash2 } from "lucide-react";
import React from "react";

const TableCard = ({ data }) => {
    
  return (
    <div className="flex justify-between items-center p-4 rounded-xl shadow-md bg-gray-800 text-white hover:bg-gray-700 transition">
      {/* Masa ve Alan Bilgisi */}
      <div>
        <h3 className="text-lg font-semibold">{data.name}</h3>
        <p className="text-sm text-gray-400">{data.region}</p>
      </div>

      {/* Düzenle ve Sil İkonları */}
      <div className="flex gap-3">
        <button className="text-blue-400 hover:text-blue-600">
          <Pencil size={20} />
        </button>
        <button className="text-red-400 hover:text-red-600">
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TableCard;
