import { DollarSign, Clipboard, FileText, CreditCard } from "lucide-react";

export const AccountPerformanceCard = ({ account }) => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-xl border shadow-sm transition hover:scale-[1.02] bg-gray-900 border-gray-500/50">
      {/* Üst kısım: Hesap Adı */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white">
          <CreditCard className="w-5 h-5" />
        </div>
        <div className="flex flex-col text-sm">
          <span className="text--gray-200 font-medium">{account.name}</span>
          <span className="text-xs text-gray-400">{account.totalOrders} Sipariş</span>
        </div>
      </div>

      {/* Gelir, Gider, Kâr */}
      <div className="flex justify-between text-xs text-gray-300">
        <div className="flex items-center gap-1">
          <DollarSign className="w-3 h-3 text-green-500" />
          <span className="font-medium">{account.totalIncome} ₺ Gelir</span>
        </div>
        <div className="flex items-center gap-1">
          <FileText className="w-3 h-3 text-red-400" />
          <span>{account.totalExpenses} ₺ Gider</span>
        </div>
        <div className="flex items-center gap-1">
          <Clipboard className="w-3 h-3 text-blue-400" />
          <span>{account.totalProfit} ₺ Kâr</span>
        </div>
      </div>

      {/* Detaylar */}
      <div className="flex justify-between text-[11px] text-gray-500 mt-1">
        <div className="flex items-center gap-1">
          <Clipboard className="w-3 h-3 text-purple-400" />
          <span>Ödenen: {account.totalPaid} ₺</span>
        </div>
        <div className="flex items-center gap-1">
          <CreditCard className="w-3 h-3 text-yellow-400" />
          <span>Banka: {account.bankBalance} ₺</span>
        </div>
      </div>
    </div>
  );
};
