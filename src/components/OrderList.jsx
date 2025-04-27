import React, { useState } from "react";
import OrderCard from "./OrderCard";
import TableCardSkeleton from "./Skeletons/TableCardSkeleton ";
const OrderList = () => {
  const ordersData = [
    {
      table: 1,
      region: "Bahçe",
      orders: [
        {
          name: "Pizza",
          customer: "Ahmet Yılmaz",
          amount: 80,
          time: "12:30",
          elapsedTime: 15,
          status: "Beklemede",
        },
        {
          name: "Pasta",
          customer: "Mehmet Demir",
          amount: 50,
          time: "12:32",
          elapsedTime: 13,
          status: "İptal",
        },
        {
          name: "Kola",
          customer: "Zeynep Kılıç",
          amount: 20,
          time: "12:34",
          elapsedTime: 11,
          status: "Hazırlanıyor",
        },
      ],
      totalAmount: 150,
      rank: 0,
    },
    {
      table: 2,
      region: "Bahçe",
      orders: [
        {
          name: "Hamburger",
          customer: "Ali Yıldız",
          amount: 60,
          time: "12:40",
          elapsedTime: 5,
          status: "Servis Edildi",
        },
        {
          name: "Patates Kızartması",
          customer: "Emine Arslan",
          amount: 30,
          time: "12:45",
          elapsedTime: 3,
          status: "Servis Edildi",
        },
      ],
      totalAmount: 90,
      rank: 1,
    },
    {
      table: 3,
      region: "Bahçe",
      orders: [
        {
          name: "Çorba",
          customer: "Ahmet Yılmaz",
          amount: 20,
          time: "12:50",
          elapsedTime: 2,
          status: "Hazır",
        },
        {
          name: "Salata",
          customer: "Mehmet Demir",
          amount: 40,
          time: "12:55",
          elapsedTime: 1,
          status: "Hazırlanıyor",
        },
      ],
      totalAmount: 60,
      rank: 2,
    },
    {
      table: 4,
      region: "Bahçe",
      orders: [
        {
          name: "Pizza",
          customer: "Ali Yıldız",
          amount: 80,
          time: "12:15",
          elapsedTime: 25,
          status: "İptal",
        },
        {
          name: "Burrito",
          customer: "Zeynep Kılıç",
          amount: 70,
          time: "12:18",
          elapsedTime: 22,
          status: "Hazırlanıyor",
        },
      ],
      totalAmount: 150,
      rank: 3,
    },
    {
      table: 5,
      region: "Bahçe",
      orders: [
        {
          name: "Steak",
          customer: "Mehmet Demir",
          amount: 120,
          time: "12:45",
          elapsedTime: 10,
          status: "Servis Edildi",
        },
      ],
      totalAmount: 120,
      rank: 4,
    },
    {
      table: 6,
      region: "Bahçe",
      orders: [
        {
          name: "Kebap",
          customer: "Ali Yıldız",
          amount: 100,
          time: "13:00",
          elapsedTime: 5,
          status: "Servis Edildi",
        },
        {
          name: "Baklava",
          customer: "Emine Arslan",
          amount: 25,
          time: "13:05",
          elapsedTime: 4,
          status: "Servis Edildi",
        },
      ],
      totalAmount: 125,
      rank: 5,
    },
    {
      table: 7,
      region: "Bahçe",
      orders: [
        {
          name: "Sushi",
          customer: "Ahmet Yılmaz",
          amount: 150,
          time: "13:10",
          elapsedTime: 10,
          status: "Hazırlanıyor",
        },
        {
          name: "Soja Sote",
          customer: "Zeynep Kılıç",
          amount: 50,
          time: "13:12",
          elapsedTime: 8,
          status: "Hazırlanıyor",
        },
      ],
      totalAmount: 200,
      rank: 6,
    },
    {
      table: 8,
      region: "Bahçe",
      orders: [
        {
          name: "Spaghetti",
          customer: "Mehmet Demir",
          amount: 70,
          time: "13:30",
          elapsedTime: 3,
          status: "Servis Edildi",
        },
        {
          name: "Pasta",
          customer: "Ali Yıldız",
          amount: 40,
          time: "13:35",
          elapsedTime: 1,
          status: "Servis Edildi",
        },
      ],
      totalAmount: 110,
      rank: 7,
    },
    {
      table: 9,
      region: "Bahçe",
      orders: [
        {
          name: "Pizza",
          customer: "Emine Arslan",
          amount: 90,
          time: "13:40",
          elapsedTime: 2,
          status: "Hazırlanıyor",
        },
        {
          name: "Kola",
          customer: "Zeynep Kılıç",
          amount: 20,
          time: "13:45",
          elapsedTime: 1,
          status: "Hazırlanıyor",
        },
      ],
      totalAmount: 110,
      rank: 8,
    },
    {
      table: 10,
      region: "Bahçe",
      orders: [
        {
          name: "Burger",
          customer: "Ali Yıldız",
          amount: 80,
          time: "13:50",
          elapsedTime: 1,
          status: "Servis Edildi",
        },
        {
          name: "Patates Kızartması",
          customer: "Ahmet Yılmaz",
          amount: 25,
          time: "13:55",
          elapsedTime: 0,
          status: "Servis Edildi",
        },
      ],
      totalAmount: 105,
      rank: 9,
    },
    {
      table: 11,
      region: "Bahçe",
      orders: [
        {
          name: "Pizza",
          customer: "Emine Arslan",
          amount: 90,
          time: "13:40",
          elapsedTime: 2,
          status: "Hazırlanıyor",
        },
        {
          name: "Kola",
          customer: "Zeynep Kılıç",
          amount: 20,
          time: "13:45",
          elapsedTime: 1,
          status: "Hazırlanıyor",
        },
      ],
      totalAmount: 110,
      rank: 8,
    },
    {
      table: 12,
      region: "Bahçe",
      orders: [
        {
          name: "Burger",
          customer: "Ali Yıldız",
          amount: 80,
          time: "13:50",
          elapsedTime: 1,
          status: "Servis Edildi",
        },
        {
          name: "Patates Kızartması",
          customer: "Ahmet Yılmaz",
          amount: 25,
          time: "13:55",
          elapsedTime: 0,
          status: "Servis Edildi",
        },
      ],
      totalAmount: 105,
      rank: 9,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 6;

  const paginate = (pageNumber) => {
    
    setCurrentPage(pageNumber);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const sortedOrders = [...ordersData].sort(
    (a, b) => b.totalAmount - a.totalAmount
  );
  const currentOrders = sortedOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <div className=" space-y-4 p-2 border border-gray-500/50 rounded-2xl bg-gradient-to-b from-gray-900 to-transparent">
     <h2 className="text-center text-gray-300 font-bold" >Açık Masalar</h2>
     <div className="grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto  items-start" >
      {currentOrders.map((order,index) => (
        <OrderCard
          key={order.table}
          index={index}
          table={order.table}
          orders={order.orders}
          totalAmount={order.totalAmount}
        />
      ))}
     </div>
     <TableCardSkeleton/>

      {/* Pagination */}
      <div className="flex justify-center gap-2 my-4">
        {[...Array(Math.ceil(ordersData.length / ordersPerPage))].map(
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className="px-3 py-1 text-center rounded-md bg-blue-500 text-gray-100"
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default OrderList;
