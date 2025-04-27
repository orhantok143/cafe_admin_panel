import BusinessHeader from "./BusinessHeader";
import BusinessTabs from "./BusinessTabs";

export default function MyBusinessProfileCard() {
  const business = {
    name: "Tatlı Sokak",
    location: "Beşiktaş / İstanbul",
    hours: "10:00 - 22:00",
    category: "Pastane",
    phone: "+90 532 654 32 10",
    themeMode: "light",
    themeName: "Tatlı Teması",
    logoUrl: "/images/pastane-logo.png",
    menu: ["Muzlu Pasta", "Çikolatalı Kek", "Tiramisu"],
    staff: [
      { name: "Ayşe Yılmaz", role: "Kasiyer" },
      { name: "Mehmet Can", role: "Şef" },
    ],
    coupons: [
      { code: "TATLI23", category: "Tatlılar", expiry: "01.06.2025" },
      { code: "PASTA10", category: "Pasta", expiry: "15.06.2025" },
    ],
  };
  return (
    <div className="card w-full mx-auto transition-all">
      <BusinessHeader business={business} />
      <hr className="text-gray-400/30 text-xs w-96 mx-auto" />
      <BusinessTabs business={business} />
    </div>
  );
}
