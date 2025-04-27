import { useState } from "react";
import { Wifi, CheckCircle, XCircle, Loader } from "lucide-react"; // Lucide-React ikonları

function WifiCollector() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    setLoading(true);
    setStatus("");
    setError(null);

    try {
      // 1. IP adresini al
      const ipRes = await fetch("https://api.ipify.org?format=json");
      if (!ipRes.ok) throw new Error("IP adresi alınamadı.");
      const ipData = await ipRes.json();
      const publicIP = ipData.ip;

      // 2. Konum bilgisini al
      const getPosition = () =>
        new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

      const position = await getPosition();
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // 3. Tarayıcı cihaz bilgisi
      const userAgent = navigator.userAgent;

      // 4. Backend'e gönderilecek veri
      const wifiInfo = {
        publicIP,
        latitude,
        longitude,
        userAgent,
        createdAt: new Date().toISOString(),
      };

      console.log("Gönderilen Veri:", wifiInfo);

      // 5. Backend'e post at (şu an console.log yapıyor, sen buraya POST yazabilirsin)
      /*
      await fetch('/api/save-wifi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wifiInfo)
      });
      */

      setStatus("✅ Wi-Fi bilgileri başarıyla kaydedildi!");
    } catch (err) {
      console.error("Kayıt sırasında hata:", err);
      setError(err.message || "Bilinmeyen bir hata oluştu.");
      setStatus("❌ Kayıt sırasında bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="w-full max-w-lg px-0 sm:px-4">
        {/* Bilgilendirme Metni */}
        <div className="text-center  mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-4 animate__animated animate__pulse">
            <Wifi className="inline-block mr-2" size={35} />
            İşletmenizin Wi-Fi Ağlarını Güvenle Kaydedin
          </h2>
          <p className="text-xs text-gray-300 italic">
            Müşterilerinizin sipariş verebilmesi için doğru Wi-Fi ağlarını
            kaydetmelisiniz. Lütfen adımları dikkatlice takip edin.
          </p>
        </div>

        {/* Adımlar */}
        <div className="space-y-4">
          {/* Adım 1 */}
          <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="bg-blue-500 p-3 rounded-full text-white">
              <span className="text-lg font-bold">1</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Wi-Fi Ağına Bağlan
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                <Wifi className="inline-block mr-1 text-blue-500" size={20} />{" "}
                İşletmenizde kullanılan Wi-Fi ağına bağlanın. (Lütfen kişisel
                ağlara veya mobil veriye bağlı olmadığınızdan emin olun.)
              </p>
            </div>
          </div>

          {/* Adım 2 */}
          <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-teal-500">
            <div className="bg-teal-500 p-3 rounded-full text-white">
              <span className="text-lg font-bold">2</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Bağlantıyı Doğrula
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                🔍 Bağlı olduğunuz ağın ismini ve bağlantı bilgilerini kontrol
                edin. (Yanlış bir ağa bağlandıysanız lütfen doğru ağa geçin.)
              </p>
            </div>
          </div>

          {/* Adım 3 */}
          <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-yellow-500">
            <div className="bg-yellow-500 p-3 rounded-full text-white">
              <span className="text-lg font-bold">3</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Wi-Fi Ağını Kaydet
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                💾 "Wi-Fi Bilgilerini Kaydet" butonuna tıklayın. (Bu işlem
                sadece bağlı olduğunuz ağı sisteme kaydeder.)
              </p>
            </div>
          </div>

          {/* Adım 4 */}
          <div className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg shadow-md border-l-4 border-green-500">
            <div className="bg-green-500 p-3 rounded-full text-white">
              <span className="text-lg font-bold">4</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">
                Ekstra Ağlar Ekleyin (Opsiyonel)
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                ➕ İşletmenizde birden fazla Wi-Fi ağı varsa, her birine sırayla
                bağlanıp kaydedin. (Örneğin; Ana Ağ, Teras Ağ, Bahçe Ağ gibi...)
              </p>
            </div>
          </div>
        </div>

        {/* Kaydetme Butonu */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full py-4 mt-8 bg-green-700 text-white rounded-lg hover:bg-green-800 disabled:bg-gray-500 text-lg font-semibold transition duration-300 transform hover:scale-105"
        >
          <Wifi className="inline-block mr-3" size={24} />
          {loading ? (
            <>
              <Loader className="animate-spin inline-block mr-3" size={20} />
              Kaydediliyor...
            </>
          ) : (
            "Wi-Fi Bilgisini Kaydet"
          )}
        </button>

        {/* Durum Bilgisi */}
        {status && (
          <div
            className={`mt-6 text-lg ${
              error ? "text-red-500" : "text-green-500"
            } flex items-center justify-center`}
          >
            {error ? (
              <XCircle className="inline-block mr-3" size={24} />
            ) : (
              <CheckCircle className="inline-block mr-3" size={24} />
            )}
            {status}
          </div>
        )}

        {/* Hata Bilgisi */}
        {error && (
          <div className="mt-4 text-sm text-red-500">
            <XCircle className="inline-block mr-3" size={20} />
            <strong>Hata: </strong>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default WifiCollector;
