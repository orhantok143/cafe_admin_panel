import { FiEdit, FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

export default function BusinessHeader({ business }) {
  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 rounded-lg">
      {/* Logo */}
      <div className="flex justify-center md:justify-start">
        <div className="avatar">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={business.logoUrl} alt={`${business.name} Logo`} />
          </div>
        </div>
      </div>

      {/* Bilgiler */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-base-content">
            {business.name}
          </h2>
          <p className="text-sm md:text-base text-base-content/70 mt-1 flex items-center gap-2">
            <span className="material-icons text-base">
              <IoLocationOutline />
            </span>
            {business.location}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm md:text-base text-base-content/80">
          <div>
            <p className="font-semibold">Kategori:</p>
            <p>{business.category}</p>
          </div>
          <div>
            <p className="font-semibold">Çalışma Saatleri:</p>
            <p>{business.hours}</p>
          </div>
          <div>
            <p className="font-semibold">Telefon:</p>
            <p className="flex items-center gap-1">
              <span className="material-icons text-sm">
                <FiPhone />
              </span>
              {business.phone}
            </p>
          </div>
          <div className="flex flex-col justify-between">
              <button className="btn btn-outline btn-sm self-end">
                <span className="material-icons text-sm">
                  <FiEdit />
                </span>
                Düzenle
              </button>
            </div>
          </div>
        </div>

      {/* Düzenle Butonu */}
    </div>
  );
}
