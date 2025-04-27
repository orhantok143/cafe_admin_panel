import React from 'react';
import { DollarSign, Tag, CheckCircle, XCircle, ChevronRight, Pencil, Trash2 } from 'lucide-react';

const ProductCard = ({ data }) => {
  const statusColor = {
    active: 'bg-green-500 text-white',
    blocked: 'bg-red-500 text-white',
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg transition hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-4">
        {/* Ürün İsmi ve Fiyat */}
        <div>
          <h4 className="text-lg font-semibold text-gray-300">{data.name}</h4>
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <DollarSign size={14} />
            <span>{data.price} <span className='text-green-500'>₺</span>  </span>
          </div>
        </div>

        {/* Durum */}
        <div
          className={`px-2 py-1 rounded-md text-sm font-semibold ${statusColor[data.status]}`}
        >
          {data.status === 'active' ? (
            <CheckCircle size={16} />
          ) : (
            <XCircle size={16} />
          )}
          {data.status === 'active' ? 'Aktif' : 'Engellenmiş'}
        </div>
      </div>

      {/* Kategori ve Alt Kategori */}
      <div className="flex items-center justify-between">
       <div className='flex items-center gap-2 text-sm text-gray-300 mb-2'>
       <Tag size={14} />
       <span className='flex items-center' >{data.category} <ChevronRight className='text-orange-500' size={18}/> {data.subCategory}</span>
       </div>
      
      {/* Düzenle ve Sil İkonları */}
      <div className="flex gap-3">
        <button className="text-blue-400 hover:text-blue-600">
          <Pencil className='cursor-pointer' size={18} />
        </button>
        <button className="text-red-400 hover:text-red-600">
          <Trash2 className='cursor-pointer' size={18} />
        </button>
      </div>
      </div>

    </div>
  );
};

export default ProductCard;
