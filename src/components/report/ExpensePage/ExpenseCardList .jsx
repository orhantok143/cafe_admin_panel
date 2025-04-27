import { CalendarDays, StickyNote,Plus } from "lucide-react";

export const ExpenseCardList = ({ expenses,onAddClick }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {expenses.map((item) => (
        <div key={item.id} className="bg-gray-800 rounded-xl p-4 shadow flex items-start border-l-4" style={{ borderColor: item.color }}>
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-white">{item.type}</h3>
            <p className="text-xl font-bold text-white mt-1">{item.amount.toLocaleString()} ₺</p>
            <div className="flex items-center text-gray-400 mt-2 text-sm">
              <CalendarDays size={16} className="mr-1" />
              <span>{item.date}</span>
            </div>
            {item.note && (
              <div className="flex items-center text-gray-400 mt-1 text-sm">
                <StickyNote size={16} className="mr-1" />
                <span>{item.note}</span>
              </div>
            )}
          </div>
        </div>
      ))}
     <div
        onClick={onAddClick}
            className="w-1/2 flex items-center justify-center gap-2 sm:w-full mx-auto text-gray-300 cursor-pointer outline-2 outline-dashed p-4 rounded-3xl outline-violet-600/80 hover:bg-indigo-500 hover:outline-0 hover:text-white shadow-md hover:shadow-indigo-500/30 transition-all"
            >
        <Plus size={28} />
        <h2 className="text-md font-semibold">Gider Ekle</h2>
      </div>

    </div>
  );
};
