import { DollarSign, Clock4, Users, Clipboard } from "lucide-react";

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
        icon: "bg-gray-800 text-gray-300",
        card: "bg-gray-900 border-gray-700",
        stripe: "bg-transparent",
      };
  }
};

export const EmployeePerformanceCard = ({ employee, index }) => {
  const { icon, card, stripe } = getRankStyles(index);

  return (
  <div className="bg-gray-900 overflow-hidden rounded-xl">
      <div className={`relative flex flex-col gap-3 p-4 rounded-xl border shadow-sm transition hover:scale-[1.02] ${card}`}>
      {/* Sol renk şeridi */}
      <div className={`absolute left-0 top-0 h-full w-1.5 rounded-l-xl ${stripe} `}></div>

      {/* Üst kısım: İsim & Sıra */}
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 flex items-center justify-center rounded-full ${icon}`}>
          {index < 3 ? <Clipboard className="w-5 h-5" /> : <span className="text-xs font-bold">#{index + 1}</span>}
        </div>
        <div className="flex flex-col text-sm">
          <span className="text-white font-medium">{employee.name}</span>
          <span className="text-xs text-gray-400">{employee.orders} Sipariş</span>
          <span className="text-[10px] text-gray-600 italic">Son güncelleme: {employee.updatedAt}</span>
        </div>
      </div>

      {/* Kazanç, Çalışma Süresi */}
      <div className="flex justify-between text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3 text-green-500" />
          <span className="font-medium">{employee.totalIncome} ₺</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock4 className="w-3 h-3 text-gray-400" />
          <span>{employee.totalWorkHours} Saat</span>
        </div>
      </div>

      {/* Performans Detayları */}
      <div className="flex justify-between text-[11px] text-gray-500 mt-1">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-blue-400" />
          <span>{employee.teamsWorked} Takım</span>
        </div>
        <div className="flex items-center gap-1">
          <Clipboard className="w-3 h-3 text-purple-400" />
          <span>{employee.complaints} Şikayet</span>
        </div>
      </div>
    </div>
  </div>
  );
};
