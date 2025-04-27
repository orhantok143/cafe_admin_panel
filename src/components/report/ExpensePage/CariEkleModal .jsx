import React from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export const CariEkleModal = ({ isOpen, onClose }) => {
  const validationSchema = Yup.object({
    firmaAdi: Yup.string().required('Firma adı gereklidir'),
    adres: Yup.string().required('Adres gereklidir'),
    telefon: Yup.string().required('Telefon numarası gereklidir'),
    vergiNumarasi: Yup.string().required('Vergi numarası gereklidir'),
    kategori: Yup.string().required('Kategori seçilmesi gereklidir'),
  });

  const handleSave = (values) => {
    console.log('Kaydedilen Değerler:', values);
    onClose(); // Modalı kapat
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-2xl bg-gray-800 p-6 text-white shadow-xl border border-gray-700">
          <DialogTitle className="text-xl font-bold text-center mb-4">
            Cari Ekle
          </DialogTitle>

          <Formik
            initialValues={{
              firmaAdi: '',
              adres: '',
              telefon: '',
              vergiNumarasi: '',
              kategori: '',
              durum: 'alacaklı',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSave}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                {/* Firma Adı */}
                <div>
                  <label className="block text-sm mb-1" htmlFor="firmaAdi">Firma Adı</label>
                  <Field
                    id="firmaAdi"
                    name="firmaAdi"
                    type="text"
                    className={`w-full p-2 rounded-md bg-gray-700 border ${errors.firmaAdi && touched.firmaAdi ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.firmaAdi && touched.firmaAdi && <p className="text-xs text-red-400 mt-1">{errors.firmaAdi}</p>}
                </div>

                {/* Adres */}
                <div>
                  <label className="block text-sm mb-1" htmlFor="adres">Adres</label>
                  <Field
                    id="adres"
                    name="adres"
                    type="text"
                    className={`w-full p-2 rounded-md bg-gray-700 border ${errors.adres && touched.adres ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.adres && touched.adres && <p className="text-xs text-red-400 mt-1">{errors.adres}</p>}
                </div>

                {/* Telefon */}
                <div>
                  <label className="block text-sm mb-1" htmlFor="telefon">Telefon Numarası</label>
                  <Field
                    id="telefon"
                    name="telefon"
                    type="text"
                    className={`w-full p-2 rounded-md bg-gray-700 border ${errors.telefon && touched.telefon ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.telefon && touched.telefon && <p className="text-xs text-red-400 mt-1">{errors.telefon}</p>}
                </div>

                {/* Vergi Numarası */}
                <div>
                  <label className="block text-sm mb-1" htmlFor="vergiNumarasi">Vergi Numarası</label>
                  <Field
                    id="vergiNumarasi"
                    name="vergiNumarasi"
                    type="text"
                    className={`w-full p-2 rounded-md bg-gray-700 border ${errors.vergiNumarasi && touched.vergiNumarasi ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.vergiNumarasi && touched.vergiNumarasi && <p className="text-xs text-red-400 mt-1">{errors.vergiNumarasi}</p>}
                </div>

                {/* Kategori */}
                <div>
                  <label className="block text-sm mb-1" htmlFor="kategori">Kategori</label>
                  <Field
                    as="select"
                    name="kategori"
                    id="kategori"
                    className="w-full h-10 p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Seçiniz</option>
                    <option value="toptanci">Toptancı</option>
                    <option value="perakendeci">Perakendeci</option>
                    <option value="hizmet-saglayici">Hizmet Sağlayıcı</option>
                    <option value="diger">Diğer</option>
                  </Field>
                  {errors.kategori && touched.kategori && <p className="text-xs text-red-400 mt-1">{errors.kategori}</p>}
                </div>

               

                {/* Butonlar */}
                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-sm rounded-md bg-gray-600 hover:bg-gray-500 transition"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-sm rounded-md bg-blue-600 hover:bg-blue-700 transition font-semibold"
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
  );
};


