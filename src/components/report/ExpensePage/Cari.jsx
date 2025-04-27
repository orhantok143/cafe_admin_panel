import { CreditCard, Plus } from "lucide-react";
import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CariKart = ({ firmaAd, alacak, borc, bakiye, durum }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAlacakli = durum === "alacaklı";
  const badgeColor = isAlacakli
    ? "bg-green-600/20 text-green-400"
    : "bg-red-600/20 text-red-400";
  const iconColor = isAlacakli ? "text-green-400" : "text-red-400";
  const durumBadgeBg = isAlacakli ? "bg-green-500/20" : "bg-red-500/20";
  const durumBadgeText = isAlacakli ? "text-green-400" : "text-red-400";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleFaturaSubmit = (values, { resetForm }) => {
    console.log("Fatura Eklendi:", values);
    resetForm();
    closeModal();
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 rounded-2xl shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-300 border border-gray-700">
        <div className="flex items-center space-x-4">
          {/* Icon */}
          <div className={`p-2 rounded-md ${badgeColor}`}>
            <CreditCard className={`w-5 h-5 ${iconColor}`} />
          </div>

          {/* Firma ve Alacak/Borç Bilgileri */}
          <div>
            <h3 className="text-base font-semibold text-gray-100">{firmaAd}</h3>
            <div className="flex flex-col mt-1 text-xs text-gray-400">
              <span>
                Alacak:{" "}
                <strong className="text-gray-200">
                  {Number(alacak).toLocaleString()}₺
                </strong>
              </span>
              <span>
                Borç:{" "}
                <strong className="text-gray-200">
                  {Number(borc).toLocaleString()}₺
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* Sağ Tarafta Bakiye ve Durum Badge'i ve Fatura Ekle Butonu */}
        <div className="text-right flex flex-col items-end space-y-2">
          <h4 className="text-lg font-bold text-gray-50">
            {Number(bakiye).toLocaleString()}₺
          </h4>
          <span
            className={`px-2 py-0.5 text-[10px] rounded-full font-medium ${durumBadgeBg} ${durumBadgeText}`}
          >
            {isAlacakli ? "Alacaklı" : "Borçlu"}
          </span>

          {/* Fatura Ekle Butonu */}
          <button
            onClick={openModal}
            className="mt-2 text-xs bg-blue-500 hover:bg-blue-600 transition px-3 py-1 rounded-full text-gray-100"
          >
            Fatura Ekle
          </button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <DialogPanel className="bg-gray-800 text-gray-100 p-6 rounded-2xl w-full max-w-md shadow-lg space-y-4">
            <DialogTitle className="text-xl font-bold text-center">
              Fatura Ekle
            </DialogTitle>

            <Formik
              initialValues={{ faturaNo: "", tutar: "", tarih: "", tip: "" }}
              validationSchema={Yup.object({
                faturaNo: Yup.string().required("Fatura No zorunlu"),
                tutar: Yup.number()
                  .positive("Pozitif tutar girin")
                  .required("Tutar zorunlu"),
                tarih: Yup.date().required("Tarih zorunlu"),
                tip: Yup.string().required("Fatura tipi seçilmelidir"),
              })}
              onSubmit={handleFaturaSubmit}
            >
              {({ setFieldValue, values }) => (
                <Form className="space-y-4">
                  {/* Fatura No Alanı */}
                  <div className="space-y-1">
                    <label className="text-sm" htmlFor="faturaNo">
                      Fatura No
                    </label>
                    <Field
                      name="faturaNo"
                      className="w-full p-2 rounded-xl bg-gray-700 outline-none text-sm"
                      placeholder="Fatura numarası"
                    />
                    <ErrorMessage
                      name="faturaNo"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* Tutar Alanı */}
                  <div className="space-y-1">
                    <label className="text-sm" htmlFor="tutar">
                      Tutar (₺)
                    </label>
                    <Field
                      name="tutar"
                      type="number"
                      className="w-full p-2 rounded-xl bg-gray-700 outline-none text-sm"
                      placeholder="Fatura tutarı"
                    />
                    <ErrorMessage
                      name="tutar"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* Tarih Alanı */}
                  <div className="space-y-1">
                    <label className="text-sm" htmlFor="tarih">
                      Tarih
                    </label>
                    <Field
                      name="tarih"
                      type="date"
                      className="w-full p-2 rounded-xl bg-gray-700 outline-none text-sm"
                    />
                    <ErrorMessage
                      name="tarih"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* Fatura Tipi Seçimi */}
                  <div className="space-y-1">
                    <label className="text-sm" htmlFor="tip">
                      Fatura Tipi
                    </label>
                    <Field
                      as="select"
                      name="tip"
                      className="w-full p-2 rounded-xl bg-gray-700 outline-none text-sm"
                    >
                      <option value="" disabled>Tür seçin</option>
                      <option value="gider">Gider</option>
                      <option value="gelir">Gelir</option>
                    </Field>
                    <ErrorMessage
                      name="tip"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>

                  {/* Butonlar */}
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-xl text-sm"
                    >
                      İptal
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-xl text-sm"
                    >
                      Kaydet
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

const CariHesaplar = ({ onAddClick }) => {
  // Örnek cari veriler
  const cariler = [
    {
      firmaAd: "ABC Toptan",
      alacak: 1200,
      borc: 300,
      bakiye: 900,
      durum: "alacaklı",
    },
    {
      firmaAd: "XYZ Toptan",
      alacak: 500,
      borc: 700,
      bakiye: -200,
      durum: "borçlu",
    },
    {
      firmaAd: "DEF Toptan",
      alacak: 1500,
      borc: 400,
      bakiye: 1100,
      durum: "alacaklı",
    },
  ];

  return (
    <>
      <h2 className="text-xl text-center font-semibold text-gray-100 mb-4">
        Cari Hesaplar
      </h2>

      {/* Cari Kartları */}
      <div className="space-y-4">
        {cariler.map((cari, index) => (
          <CariKart
            key={index}
            firmaAd={cari.firmaAd}
            alacak={cari.alacak}
            borc={cari.borc}
            bakiye={cari.bakiye}
            durum={cari.durum}
          />
        ))}
      </div>

      {/* Cari Ekle Butonu */}
      <div
        onClick={onAddClick}
        className="w-2/4 mt-4 flex items-center justify-center gap-2 sm:w-full mx-auto text-gray-300 cursor-pointer outline-2 outline-dashed p-4 rounded-3xl outline-violet-600/80 hover:bg-indigo-500 hover:outline-0 hover:text-white shadow-md hover:shadow-indigo-500/30 transition-all"
      >
        <Plus size={28} />
        <h2 className="text-md font-semibold">Cari Ekle</h2>
      </div>
    </>
  );
};

export default CariHesaplar;
