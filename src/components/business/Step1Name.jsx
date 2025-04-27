import React, { useEffect } from 'react';
import InputField from '../../utilis/InputField';

const Step1Name = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // veya "auto"
      });
    }, []);
    
  return (
    <div className='px-6'>
      <h2 className="sm:text-xl font-semibold mb-3 text-gray-300">İşletme Adı</h2>
      <InputField
        name="name"
        type="text"
        label="İşletme Adı"
        placeholder="Örn: Soft Cafe"
      />
    </div>
  );
};

export default Step1Name;
