import { Circle } from "lucide-react";

// Doluluk oranı kartı
export const OccupancyCard = ({ current, total }) => {
  const occupancyPercentage = Math.round((current / total) * 100);
  const statusColor =
    occupancyPercentage === 100
      ? "bg-red-500"
      : occupancyPercentage >= 75
      ? "bg-yellow-500"
      : "bg-green-500";

  return (
    <div className="relative p-6 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-lg">
      {/* Sol Renkli Bar */}
      <div className="absolute left-0 top-0 h-full w-2.5 rounded-l-xl bg-gradient-to-b from-blue-800 to-blue-300"></div>

      {/* Başlık ve İkon */}
      <div className="flex items-center gap-4 text-white mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full ${statusColor}`}
        >
          <Circle className="w-6 h-6" />
        </div>
        <div className="text-lg font-semibold">Kafe Doluluk Oranı</div>
      </div>

      {/* Doluluk Oranı Yüzdesi */}
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white">
          {occupancyPercentage}%
        </div>
        <div className="text-xs text-gray-200">Doluluk: {current}/{total} masa</div>
      </div>

      {/* Alt kısmında detaylar */}
      <div className="flex justify-between text-sm text-gray-300 mt-4">
        <div className="flex items-center gap-1">
          <span className="text-gray-300">Boş masalar:</span>
          <span className="font-medium text-white">{total - current}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-300">Dolu masalar:</span>
          <span className="font-medium text-white">{current}</span>
        </div>
      </div>
    </div>
  );
};
