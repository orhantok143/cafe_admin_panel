import React, { useState } from "react";
import CariHesaplar from "../components/report/ExpensePage/Cari";
import { CariEkleModal } from "../components/report/ExpensePage/CariEkleModal ";

const CariPage = () => {
  const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    
  return (
    <div>
      <CariHesaplar onAddClick={() => setIsOpen(true)}  />
      <CariEkleModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default CariPage;
