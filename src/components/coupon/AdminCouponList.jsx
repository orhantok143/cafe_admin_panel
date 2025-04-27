import CouponCard from "./CouponCard";


const couponData = [
  {
    category: "Tatlı",
    subCategory: "Pasta",
    user: "mehmet.kaya",
    amount: 30,
    code: "CAKE30",
    createdAt: "10.04.2025",
    expiry: "10.06.2025",
    status: "Aktif", // veya "Kullanıldı"
  },
  {
    category: "Soğuk",
    subCategory: "Limonata",
    user: "ayse.demir",
    amount: 20,
    code: "COLD20",
    createdAt: "01.04.2025",
    expiry: "01.05.2025",
    status: "Kullanıldı",
  },
];

export default function AdminCouponList() {
  return (
    <div className="flex p-4">
      {couponData.map((coupon, idx) => (
        <CouponCard key={idx} coupon={coupon} />
      ))}
    </div>
  );
}
