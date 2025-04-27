import { MdOutlineDownloadDone } from "react-icons/md";

const orders = [
  {
    id: 101,
    customer: "Ahmet Yılmaz",
    table: 5,
    items: ["Latte", "Tost"],
    status: "Hazırlanıyor",
    time: "18:45",
  },
  {
    id: 102,
    customer: "Zeynep Demir",
    table: 2,
    items: ["Espresso"],
    status: "Hazır",
    time: "18:47",
  },
  {
    id: 103,
    customer: "Murat Kaya",
    table: 7,
    items: ["Çay", "Simit"],
    status: "Teslim Edildi",
    time: "18:50",
  },
];

const statusStyles = {
  "Hazırlanıyor": "bg-yellow-100 text-yellow-800",
  "Hazır": "bg-green-100 text-green-800",
  "Teslim Edildi": "bg-blue-100 text-blue-800",
};

export default function OrderTable() {
  return (
    <div className="w-full pt-4 mx-auto bg-gray-800  shadow-lg rounded-xl">
      <h2 className="text-center sm:text-xl font-semibold text-gray-300">
        Kafe Siparişleri
      </h2>
      <div className="overflow-hidden ">
        <table className=" min-w-full text-[12px] text-gray-300">
          <thead className=" text-xs uppercase ">
            <tr className="font-extrabold">
              <th className="hidden md:table-cell px-6 py-4 text-left">
                Sipariş No
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-left">
                Müşteri
              </th>
              <th className="hidden md:table-cell px-6 py-4 text-left">Masa</th>
              <th className="px-6 py-4 text-left">Siparişler</th>
              <th className="px-6 py-4 text-left">Durum</th>
              <th className="px-6 py-4 text-left">Zaman</th>
            </tr>
          </thead>
          <tbody className="text-[11px] font-semibold text-gray-300">
            {orders.map((order, idx) => (
              <tr
                key={order.id}
                className={`border-t-[0.7px] border-t-gray-600 hover:bg-base-400 transition duration-200 ${
                  idx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                }`}
              >
                <td className="hidden md:table-cell px-6  py-4 font-semibold text-gray-300">
                  {order.id}
                </td>
                <td className="hidden md:table-cell px-6 py-4">
                  {order.customer}
                </td>
                <td className="hidden md:table-cell px-6 py-4">Masa {order.table}</td>
                <td className="px-6 py-4 text-gray-300">
                  {order.items.join(", ")}
                </td>
                <td className="px-2 py-4">
                  <span
                    className={`px-4 py-1 text-nowrap rounded-full text-xs font-medium ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
