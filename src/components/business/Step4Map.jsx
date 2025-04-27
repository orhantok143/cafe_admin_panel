import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polygon,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { FaMapMarkerAlt, FaCheck } from "react-icons/fa";

// Fix default marker icon for leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const CenterMap = ({ position }) => {
  const map = useMap();
  if (position) {
    map.setView(position, 18); // Maksimum zoom seviyesi 18
  }
  return null;
};

const Step4Map = ({ formik }) => {
  const [points, setPoints] = useState([]);
  const [polygonVisible, setPolygonVisible] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);

  // Kullanıcının konumunu almak için useEffect
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          const accuracy = pos.coords.accuracy;
          const newPosition = [lat, lng];
          setCurrentPosition(newPosition); // Kullanıcı konumunu kaydet
          console.log("Konum hassasiyeti:", accuracy + " metre");
        },
        (err) => {
          alert("Konum alınamadı: " + err.message);
        },
        {
          enableHighAccuracy: true, // Yüksek hassasiyet için
          timeout: 5000, // 5 saniyelik zaman aşımı
          maximumAge: 0, // Eski verileri kullanma
        }
      );
    } else {
      alert("Tarayıcınız konum özelliğini desteklemiyor.");
    }
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // veya "auto"
    });
  }, []);
  

  const handleAddPoint = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          const accuracy = pos.coords.accuracy;
          const newPoint = [lat, lng];
          setPoints((prev) => [...prev, newPoint]);
          console.log("Konum hassasiyeti:", accuracy + " metre");
          formik.setFieldValue("location", points); // Formik'e location verisini ekliyoruz

        },
        (err) => {
          alert("Konum alınamadı: " + err.message);
        },
        {
          enableHighAccuracy: true, // Yüksek hassasiyet için
          timeout: 5000, // 5 saniyelik zaman aşımı
          maximumAge: 0, // Eski verileri kullanma
        }
      );
    } else {
      alert("Tarayıcınız konum özelliğini desteklemiyor.");
    }
  };



  return (
    <div className="space-y-4">
      <h2 className="sm:text-xl font-semibold mb-3 text-gray-300">Cafe Köşeleri Ekleyiniz</h2>

      <div className="w-full flex justify-between gap-6 px-6">
        <button
          type="button"
          onClick={handleAddPoint}
          className="flex text-[10px] font-semibold items-center  gap-1 bg-red-900 text-gray-100  p-1.5 rounded-full shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaMapMarkerAlt />
          Nokta Ekle
        </button>
      
      </div>

      <div className="h-80 rounded-xl overflow-hidden shadow-2xl bg-white">
        <MapContainer
          center={currentPosition || [39.9208, 32.8541]} // Eğer konum alınmamışsa Ankara'ya odaklanır
          zoom={18} // Maksimum zoom seviyesi
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CenterMap position={currentPosition} />
          {points.map((pos, i) => (
            <Marker key={i} position={pos} />
          ))}
          {polygonVisible && <Polygon positions={points} />}
        </MapContainer>
      </div>

      {points.length > 0 && (
        <div className="bg-gray-800 text-white p-4 rounded-xl shadow-xl">
          <h3 className="font-bold text-lg mb-3">Eklenen Noktalar:</h3>
          <ul className="space-y-2 text-sm max-h-40 overflow-y-auto">
            {points.map((p, i) => (
              <li key={i} className="flex justify-between items-center">
                <span>
                  {i + 1}. 📍 Latitude: {p[0].toFixed(6)}, Longitude:{" "}
                  {p[1].toFixed(6)}
                </span>
                <span className="text-xs text-gray-400">
                  {`Hassasiyet: ${p[0].accuracy} metre`}{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Step4Map;
