import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ThermometerSun,
  ThermometerSnowflake,
  Package,
  Pencil,
  Trash2,
} from "lucide-react";

const CategoryCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div
      className=" bg-gray-800 p-4 rounded-lg shadow-lg"
    >
      {/* Kategori Başlığı */}

      <div className="flex items-start  justify-between ">
        <div className="flex item-start gap-2 ">
          {/* Kategoriye özel İkon (örneğin, kategoriye göre bir ikon) */}
          <Package className=" bg-gray-500 p-1 rounded-md" size={40} />
          <h3 className="text-lg font-semibold text-white">{data.name}</h3>
        </div>

        {/* Alt Kategoriler Collapse */}
        <div
          onClick={toggleCollapse}
          className="text-blue-500 bg-gray-50/20 rounded-sm"
        >
          {isOpen ? (
            <>
              <ChevronUp className="cursor-pointer" size={18} />
            </>
          ) : (
            <>
              <ChevronDown className="cursor-pointer" size={18} />
            </>
          )}
        </div>
      </div>

      <div className="flex items-start  justify-between ">
        {/* Alt Kategori Sayısı */}
        <div className="text-sm text-gray-400 mt-2">
          {data.subCategories.length} Alt Kategori
        </div>
        {/* Düzenle ve Sil İkonları */}
        <div className="flex gap-2">
          <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
            <Pencil size={18} />
          </button>
          <button className="text-red-400 hover:text-red-600 cursor-pointer">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      {/* Alt Kategoriler */}
      {isOpen && (
        <div className="space-y-3">
          {data.subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="bg-gray-700 p-3 rounded-lg flex justify-between items-center"
            >
              {/* Alt Kategori İsmi ve Durumu */}
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-full ${
                    subCategory.isHot ? "bg-red-500" : "bg-blue-500"
                  }`}
                >
                  {/* Sıcak/Soğuk Durumunu Belirleme */}
                  {subCategory.isHot ? (
                    <ThermometerSun size={16} color="white" />
                  ) : (
                    <ThermometerSnowflake size={16} color="white" />
                  )}
                </div>
                <div className="text-white font-semibold">
                  {subCategory.name}
                </div>
              </div>

<div className="flex items-center gap-2">
  
              {/* Düzenle ve Sil İkonları */}
              <div className="flex gap-2 ">
                <button className="text-blue-400 hover:text-blue-600 cursor-pointer">
                  <Pencil size={14} />
                </button>
                <button className="text-red-400 hover:text-red-600 cursor-pointer">
                  <Trash2 size={14} />
                </button>
              </div>

              {/* Alt Kategori Ürün Sayısı */}
              <div
                className={`px-3 py-1 text-sm rounded-full ${
                  subCategory.productCount > 0
                    ? "bg-green-500 text-white"
                    : "bg-gray-500 text-gray-300"
                }`}
              >
                {subCategory.productCount} Ürün
              </div>
</div>


            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
