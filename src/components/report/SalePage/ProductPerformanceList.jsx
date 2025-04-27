import { ProductPerformanceCard } from "./ProductPerformanceCard";

export const ProductPerformanceList = ({ data }) => {
  // Ürünler sipariş sayısına göre sıralanıyor
  const sorted = [...data].sort((a, b) => b.orders - a.orders);

  return (
    <div className="grid gap-3 p-2 border border-gray-500/50 rounded-2xl  bg-gradient-to-b from-gray-800 to-transparent">
      <h2 className="text-center text-gray-300 font-bold" >Product Performance</h2>

      {sorted.map((product, index) => (
        <ProductPerformanceCard
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </div>
  );
};
