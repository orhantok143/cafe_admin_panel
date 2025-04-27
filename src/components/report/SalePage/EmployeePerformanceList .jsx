import { EmployeePerformanceCard } from "./EmployeePerformanceCard ";

export const EmployeePerformanceList = () => {
    const employees = [
      {
        id: 1,
        name: "Ahmet Yılmaz",
        orders: 250,
        totalIncome: 7500,
        totalWorkHours: 160,
        teamsWorked: 5,
        complaints: 2,
        updatedAt: "2025-04-21",
      },
      {
        id: 2,
        name: "Mehmet Demir",
        orders: 200,
        totalIncome: 6000,
        totalWorkHours: 140,
        teamsWorked: 4,
        complaints: 1,
        updatedAt: "2025-04-20",
      },
      {
        id: 3,
        name: "Zeynep Kılıç",
        orders: 180,
        totalIncome: 5400,
        totalWorkHours: 130,
        teamsWorked: 3,
        complaints: 0,
        updatedAt: "2025-04-19",
      },
      {
        id: 4,
        name: "Emine Arslan",
        orders: 220,
        totalIncome: 6600,
        totalWorkHours: 150,
        teamsWorked: 4,
        complaints: 3,
        updatedAt: "2025-04-18",
      },
      {
        id: 5,
        name: "Ali Yıldız",
        orders: 150,
        totalIncome: 4500,
        totalWorkHours: 120,
        teamsWorked: 2,
        complaints: 0,
        updatedAt: "2025-04-17",
      },
    ];
  
    return (
      <div className="grid gap-3 p-2 border border-gray-500/50 rounded-2xl bg-gradient-to-b from-gray-800 to-transparent">
      <h2 className="text-center text-gray-300 font-bold" >Employee Performance</h2>

        {employees.map((employee, index) => (
          <EmployeePerformanceCard key={employee.id} employee={employee} index={index} />
        ))}
      </div>
    );
  };
  