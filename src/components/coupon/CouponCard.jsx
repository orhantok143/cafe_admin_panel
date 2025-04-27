import { FaBirthdayCake, FaClipboardCheck, FaClock, FaTag } from "react-icons/fa";

const CouponCard = ({ coupon }) => {
  const status = coupon.isUsed ? "Kullanıldı" : "Aktif"; // Örnek durum kontrolü

  return (
    <div className="w-full max-w-[300px] bg-base-500 mb-4 shadow-xs shadow-gray-500 rounded-2xl hover:shadow-md transition-all duration-200">
      {/* Üst Kısım - İkon + Gradyan */}
      <div className={`flex justify-center items-center p-2 ${coupon.bgGradient} rounded-t-2xl`}>
        <div className="w-25 h-25 rounded-full bg-gradient-to-br from-white/80 to-white/5 backdrop-blur-md flex items-center justify-center shadow-inner">
          <span className="text-white text-4xl drop-shadow-md" >{coupon.icon} </span>
        </div>
      </div>

      {/* Alt Kısım - Kupon Bilgileri */}
      <div className="p-4 space-y-2 text-sm">
        <div className="text-[13px] font-bold text-pink-600">{coupon.title} Kuponu</div>

        <div className="flex gap-1 items-center">
          <FaClipboardCheck className="text-pink-500 text-lg" />
          <span className="text-neutral-content/80 text-xs">Kupon Kodu:</span>
          <span className="font-mono text-pink-500">{coupon.code.substring(0,6)}</span>
        </div>

        <div className="flex gap-1 items-center">
          <FaClock className="text-pink-500 text-lg" />
          <span className="text-neutral-content/80 text-xs">Geçerlilik:</span>
          <span className="text-xs">{coupon.expiration}</span>
        </div>

        <div className="flex gap-1 items-center">
          <FaTag className="text-pink-500 text-lg" />
          <span className="text-neutral-content/80 text-xs">Kullanım:</span>
          <span className="text-xs">{coupon.category}</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-success badge-outline text-xs">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
