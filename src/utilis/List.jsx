import React, { useState } from 'react';
import Pagination from './Pagination';

const List = ({ card: CardComponent, data = [], filterKey }) => {    
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6; // Her sayfada 5 ürün göster

  const categories = filterKey
    ? Array.from(new Set(data.map((item) => item[filterKey]).filter(Boolean)))
    : [];

  const filtered = data.filter((item) => {
    const matchesSearch = item.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? item[filterKey] === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  // Şu anda gösterilecek ürünleri hesapla
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginated = filtered.slice(startIndex, endIndex);

  // Sayfa değişince
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      {/* Arama ve Filtre Alanı */}
      <div className="mb-4 px-2 flex gap-4">
        <input
          type="text"
          placeholder="İsimle ara..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Arama yapınca 1. sayfaya dön
          }}
          className="w-full p-2 text-sm rounded-lg bg-gray-700 text-gray-200"
        />

        {filterKey && (
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1); // Filtre değişince 1. sayfaya dön
            }}
            className="p-2 text-sm rounded-lg bg-gray-700 text-gray-200"
          >
            <option value="">Tümü</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Kart Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
        {paginated.map((item, index) => (
          <CardComponent key={index} data={item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default List;
