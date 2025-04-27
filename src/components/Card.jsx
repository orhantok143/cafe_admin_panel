// import React from "react";
// import { HiOutlineDotsHorizontal } from "react-icons/hi";
// const Card = ({ card }) => {
//  return (
//     <div
//       className={`card flex gap-3 p-3 shadow-2xl bg-gradient-to-r ${card.bgColor} transition duration-150 hover:scale-105`}
//     >
//       <div className="flex justify-between align-top">
//         <div
//           className={`p-1 ${card.iconColor.bg} text-2xl ${card.iconColor.text} rounded-sm shadow-2xl`}
//         >
//           {<card.icon />}
//         </div>
//         <div className="text-gray-300">
//           <HiOutlineDotsHorizontal />
//         </div>
//       </div>
//       <div className="flex justify-between align-bottom">
//         <div className="place-content-end">
//           <h2 className="font-bold"> ${card.value} </h2>
//           <p className="text-nowrap text-white-200 text-[12px] md:text-[14px]"> {card.title} </p>
//         </div>
//         <div className="relative w-12 h-12">
//           <svg
//             className="absolute top-0 left-0 w-full h-full"
//             viewBox="0 0 36 36"
//           >
//             <path
//               className={`${card.textColor}`}
//               d="M18 2.0845
//             a 15.9155 15.9155 0 0 1 0 31.831
//             a 15.9155 15.9155 0 0 1 0 -31.831"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className={`${card.percentageColor}`}
//               d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="4"
//               strokeDasharray={`, 100`}
//             />
//           </svg>
//           <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-300">
//             {card.percentage}%
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react"; // İkon
import { MdMonetizationOn } from "react-icons/md"; // Farklı bir ikon

const Card = ({ card }) => {
  const [percentage, setPercentage] = useState(0);

  // Yüzdeyi hesaplamak ve güncellemek
  useEffect(() => {
    const calculatePercentage = () => {
      const now = new Date();

      // Açılış ve kapanış saatlerini belirleyelim
      const openTime = new Date();
      openTime.setHours(card.openHour, card.openMinute, 0); // Örnek: 08:00

      const closeTime = new Date();
      closeTime.setHours(card.closeHour, card.closeMinute, 0); // Örnek: 18:00

      // Eğer şu anki zaman, açılış ve kapanış saatleri arasındaysa, oranı hesapla
      if (now >= openTime && now <= closeTime) {
        const totalDuration = closeTime - openTime; // Toplam süre (milisaniye)
        const elapsedTime = now - openTime; // Geçen süre (milisaniye)
        const calculatedPercentage = Math.min(
          (elapsedTime / totalDuration) * 100,
          100
        );
        setPercentage(calculatedPercentage);
      }
    };

    // Günlük Ciro hesaplama
    if (card.title === "Günlük Ciro") {
      calculatePercentage();

      // Zamanı her saniyede bir güncelle
      const interval = setInterval(calculatePercentage, 1500000);
      return () => clearInterval(interval);
    } else {
      setPercentage(card.percentage); // Eğer günlük ciro değilse, verilen yüzdeyi kullan
    }
  }, [card]); // 'card' değiştiğinde yeniden çalıştır

  // Dairenin çevresi
  const radius = 16;
  const strokeWidth = 4;
  const circleCircumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circleCircumference - (percentage / 100) * circleCircumference;
    const formattedValue = new Intl.NumberFormat('tr-TR').format(card.value);
  return (
    <div className={`p-4 rounded-xl shadow-lg bg-gradient-to-r ${card.bgColor}`}>
      <div className="flex justify-between items-start">
        {/* Başlık ve İkon */}
        <div className="flex items-center space-x-2">
          <div
            className={`p-2 rounded-md ${card.iconColor.bg} ${card.iconColor.text}`}
          >
            <card.icon size={18} />
          </div>
          <h3 className="text-gray-100 text-sm font-semibold">{card.title}</h3>
        </div>
        {/* İleriye Doğru Giden Ok İkonu */}
        <ArrowUpRight className="text-gray-50 text-lg p-1 bg-gray-300/40 rounded-md border border-gray-400/50 cursor-pointer transition duration-200 hover:scale-105 hover:bg-green-600" />
      </div>

      <div className="mt-3 flex justify-between items-center">
        {/* Değer Gösterimi */}
        <div>
          <h2 className="text-gray-50 text-sm font-semibold">{formattedValue}₺</h2>
          <p className="text-gray-400 font-medium text-xs">{card.subtitle}</p>
        </div>

        {/* Yüzde İlerleme Gösterimi */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg
            className="absolute w-full h-full transform rotate-90"
            viewBox="0 0 36 36"
          >
            <circle
              className="text-gray-500"
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              className={`${card.percentageColor}`}
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-gray-100 font-medium text-[10px]">
            {Math.round(percentage)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
