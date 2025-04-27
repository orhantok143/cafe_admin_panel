import { AccountPerformanceCard } from "./AccountPerformanceCard ";

export const AccountPerformanceList = () => {
    const accounts = [
      {
        id: 1,
        name: "Restoran A",
        totalIncome: 50000,
        totalExpenses: 30000,
        totalProfit: 20000,
        totalOrders: 1000,
        totalPaid: 25000,
        bankBalance: 15000,
      },
      {
        id: 2,
        name: "Restoran B",
        totalIncome: 40000,
        totalExpenses: 25000,
        totalProfit: 15000,
        totalOrders: 850,
        totalPaid: 18000,
        bankBalance: 12000,
      },
      {
        id: 3,
        name: "Kafe C",
        totalIncome: 30000,
        totalExpenses: 15000,
        totalProfit: 15000,
        totalOrders: 650,
        totalPaid: 12000,
        bankBalance: 10000,
      },
    ];
  
    return (
      <div className="grid gap-3 p-2 border border-gray-500/50 rounded-2xl bg-gradient-to-b from-gray-800 to-transparent">
      <h2 className="text-center text-gray-300 font-bold" >Şube Performance</h2>

        {accounts.map((account) => (
          <AccountPerformanceCard key={account.id} account={account} />
        ))}
      </div>
    );
  };
  