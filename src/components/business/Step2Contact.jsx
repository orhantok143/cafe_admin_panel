import React, { useEffect } from 'react';
import InputField from '../../utilis/InputField';

const Step2Contact = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // veya "auto"
      });
    }, []);
    
  return (
    <div className='px-6'>
      <h2 className="sm:text-xl font-semibold mb-3 text-gray-300">İletişim Bilgileri</h2>
      <InputField
        name="email"
        type="email"
        label="Email"
        placeholder="ornek@mail.com"
      />
      <InputField
        name="telephone"
        type="text"
        label="Telefon"
        placeholder="05xx xxx xx xx"
      />
    </div>
  );
};

export default Step2Contact;
