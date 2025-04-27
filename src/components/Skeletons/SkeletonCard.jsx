import React from "react";

const SkeletonCard = () => {
  return (
    <div className="p-4 rounded-xl shadow-lg bg-gradient-to-r from-gray-300 to-gray-500 animate-pulse">
      {/* Başlık ve İkon */}
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded-md bg-gray-400 w-8 h-8"></div>
          <div className="w-13 h-4 bg-gray-400 rounded"></div>
        </div>
        {/* İleriye Doğru Giden Ok İkonu */}
        <div className="p-2 rounded-md bg-gray-400 w-6 h-6"></div>
      </div>

      <div className="mt-3 flex justify-between items-center">
        {/* Değer Gösterimi */}
        <div>
          <div className="w-20 h-4 bg-gray-400 rounded mb-2"></div>
          <div className="w-16 h-3 bg-gray-400 rounded"></div>
        </div>

        {/* Yüzde İlerleme Gösterimi */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg
            className="absolute w-full h-full transform rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              className="text-gray-300"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <circle
              className="text-gray-400"
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-[10px]">
            {/* Yüzde alanı burada */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
