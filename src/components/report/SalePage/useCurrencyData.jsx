import { useEffect, useState } from "react";

function useGoldPrice() {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    const headers = new Headers();
    headers.append("x-access-token", "goldapi-7hfia5b19m9uakyyl-io");
    headers.append("Content-Type", "application/json");

    const fetchs = async () => {
      try {
        const response = await fetch("https://www.goldapi.io/api/XAU", {
          method: "GET",
          headers,
        });
        const data = await response.json();


        // const response = await fetch('https://api.exchangerate-api.com/v6/latest/USD');
        // const data = await response.json();
        console.log("Güncel Dolar/TL:", data);
       
      } catch (error) {
        console.error("Verisi alınamadı:", error);
      }
    };

    fetchs(); // İlk çağrı
    const interval = setInterval(fetchs, 30000); // 30 saniyede bir tekrar et

    return () => clearInterval(interval); // Temizleme
  }, []);

  return goldPrice;
}

export default useGoldPrice;
