import { useState } from "react";
import ProductList from "../product/ProductList";
import CouponTabs from "../coupon/CouponTabs";
import PersonalList from "../personal/PersonList";
import TableList from "../table/TableList";

export default function BusinessTabs() {
  const [activeTab, setActiveTab] = useState("menu");

  return (
    <div className="mt-4 py-4  rounded-lg">
      <div role="tablist" className="tabs tabs-boxed">
        <a
          role="tab"
          className={`tab ${activeTab === "menu" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("menu")}
        >
          Menü
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "staff" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("staff")}
        >
          Personel
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "coupons" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("coupons")}
        >
          Kuponlar
        </a>
        <a
          role="tab"
          className={`tab ${activeTab === "table" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("table")}
        >
          Masalar
        </a>
      </div>

      <div className="mt-4">
        {activeTab === "menu" && <ProductList />}

        {activeTab === "staff" && <PersonalList />}

        {activeTab === "coupons" && <CouponTabs />}
        {activeTab === "table" && <TableList />}

        
      </div>
    </div>
  );
}
