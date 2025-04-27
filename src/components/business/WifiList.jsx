import { useState } from "react";
import { Trash, PlusCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function WifiList() {
  const navigate = useNavigate()
  const [savedWifis, setSavedWifis] = useState([
    { id: 1, ssid: "Cafe_Main_Wifi" },
    { id: 2, ssid: "Cafe_Garden_Wifi" },
    { id: 3, ssid: "Cafe_Terrace_Wifi" },
  ]);

  const handleDelete = (id) => {
    setSavedWifis((prev) => prev.filter((wifi) => wifi.id !== id));
  };

  const handleAddWifi = () => {
    // Buraya yeni wifi eklemek için yönlendirme veya modal açabilirsin
   navigate('/business/add-wifi')
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-white text-center">
          Kayıtlı Wi-Fi Ağları
        </h1>

        <div className="space-y-3">
          {savedWifis.map((wifi) => (
            <div
              key={wifi.id}
              className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md"
            >
              <div className="text-white font-medium">{wifi.ssid}</div>
              <button
                onClick={() => handleDelete(wifi.id)}
                className="text-red-400 hover:text-red-600"
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddWifi}
          className="w-full flex items-center justify-center gap-2 mt-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          <PlusCircle className="w-5 h-5" />
          Yeni Wi-Fi Ekle
        </button>
      </div>
    </div>
  );
}
