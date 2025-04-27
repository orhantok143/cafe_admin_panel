import React, { useEffect } from 'react';
import InputField from '../../utilis/InputField';

const Step3Address = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // veya "auto"
      });
    }, []);
    
  return (
    <div className='px-6'>
      <h2 className="sm:text-xl font-semibold mb-3 text-gray-300">Adres Bilgileri</h2>
      <InputField
        name="city"
        type="text"
        label="İl"
        placeholder="İstanbul"
      />
      <InputField
        name="district"
        type="text"
        label="İlçe"
        placeholder="Kadıköy"
      />
      <InputField
        name="address"
        type="text"
        label="Açık Adres"
        placeholder="Mahalle, Cadde, No, Daire vb."
      />
    </div>
  );
};

export default Step3Address;
