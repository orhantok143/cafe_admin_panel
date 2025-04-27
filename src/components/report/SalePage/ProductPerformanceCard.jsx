import { Medal, Circle, Clock4, DollarSign, Repeat2, ShoppingBag, Box, DoorOpen, DoorClosed } from "lucide-react";

const getRankStyles = (index) => {
  switch (index) {
    case 0:
      return {
        icon: "bg-yellow-500 text-white",
        card: "bg-yellow-100/10 border-yellow-500/20",
        stripe: "bg-yellow-500",
      };
    case 1:
      return {
        icon: "bg-gray-400 text-white",
        card: "bg-gray-100/10 border-gray-400/20",
        stripe: "bg-gray-400",
      };
    case 2:
      return {
        icon: "bg-orange-500 text-white",
        card: "bg-orange-100/10 border-orange-500/20",
        stripe: "bg-orange-500",
      };
    default:
      return {
        icon: "bg-gray-900 text-gray-300",
        card: "bg-gray-800 border-gray-700",
        stripe: "bg-transparent",
      };
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case "Yemek":
      return "text-green-500";
    case "İçecek":
      return "text-blue-400";
    case "Tatlı":
      return "text-pink-400";
    default:
      return "text-gray-500";
  }
};

export const ProductPerformanceCard = ({ product, index }) => {
  const { icon, card, stripe } = getRankStyles(index);
  const categoryColor = getCategoryColor(product.category);

  return (
   <div className="bg-gray-900 overflow-hidden rounded-xl">
     <div className={`relative flex flex-col gap-3 p-4 rounded-xl border shadow-sm transition hover:scale-[1.02] ${card}`}>
      {/* Sol renk şeridi */}
      <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-xl ${stripe}`}></div>

      {/* Üst kısım: Ürün İsmi & Sırası */}
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${icon}`}>
          {index < 3 ? <Medal className="w-5 h-5" /> : <span className="text-xs font-bold">#{index + 1}</span>}
        </div>
        <div className="flex flex-col text-sm">
          <span className="text-white font-medium">{product.name}</span>
          <span className="text-xs text-gray-400">{product.orders} orders</span>
          <span className="text-[10px] text-gray-600 italic">
            Last updated: {product.updatedAt}
          </span>
        </div>
      </div>

      {/* Kategori, Alt Kategori, Sipariş Sayısı */}
      <div className="flex justify-between text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <Box className={`w-3 h-3 ${categoryColor}`} />
          <span>{product.category} - {product.subCategory}</span>
        </div>
        <div className="flex items-center gap-1">
          <ShoppingBag className="w-3 h-3 text-gray-500" />
          <span>{product.tables} Masada</span>
        </div>
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3 text-green-500" />
          <span>{product.totalIncome} ₺</span>
        </div>
      </div>

      {/* Sipariş Süresi & Durum */}
      <div className="flex justify-between text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <Clock4 className="w-3 h-3 text-gray-400" />
          <span>{product.avgOrderTime} Dakikada Bir</span>
        </div>
        <div className="flex items-center gap-1">
          <Circle className={`w-3 h-3 ${product.status === "Aktif" ? "text-green-500" : "text-red-500"}`} />
          <span>{product.status}</span>
        </div>
      </div>

      {/* Açılma, kapanma, boş kalma süresi */}
      {/* <div className="flex justify-between text-[11px] text-gray-500 mt-1">
        <div className="flex items-center gap-1">
          <Repeat2 className="w-3 h-3 text-purple-400" />
          <span>Açıldı: {product.timesOpened} kez</span>
        </div>
        <div className="flex items-center gap-1">
          <DoorOpen className="w-3 h-3 text-blue-400" />
          <span>Kapandı: {product.timesClosed} kez</span>
        </div>
        <div className="flex items-center gap-1">
          <DoorClosed className="w-3 h-3 text-red-400" />
          <span>Boş: {product.idleDuration}</span>
        </div>
      </div> */}
    </div>
   </div>
  );
};
