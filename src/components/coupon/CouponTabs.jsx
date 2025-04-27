import { useState } from "react";
import CouponCard from "./CouponCard";
import { coupons } from "../../assets/menuItems"; // Kupon verilerinin bulunduğu dosya

const CouponTabs = () => {
  const [tab, setTab] = useState("all");

  // Filtrelenen kuponlar
  const filteredCoupons = coupons.filter((c) => {
    if (tab === "won") return c.status === "won";
    if (tab === "used") return c.status === "used";
    return true; // Tüm kuponlar
  });

  return (
    <div className="w-full">
      {/* Sekmeler */}
      <div role="tablist" className="tabs tabs-bordered mb-4">
        <button
          role="tab"
          className={`tab ${tab === "all" && "tab-active"}`}
          onClick={() => setTab("all")}
        >
          Tüm Kuponlar
        </button>
        <button
          role="tab"
          className={`tab ${tab === "won" && "tab-active"}`}
          onClick={() => setTab("won")}
        >
          Kazanılanlar
        </button>
        <button
          role="tab"
          className={`tab ${tab === "used" && "tab-active"}`}
          onClick={() => setTab("used")}
        >
          Kullanılanlar
        </button>
      </div>

      {/* Kupon Kartları */}
      <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5 gap-1 text-nowrap">
        {filteredCoupons.map((coupon) => (
          <div key={coupon.id}>
            <CouponCard coupon={coupon} />
          </div>
        ))}
      </div>
    </div>
  );
  // grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-5
};

export default CouponTabs;
