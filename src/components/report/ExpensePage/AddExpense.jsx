import React, { useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../../../utilis/InputField";
import { useNotifier } from "../../../utilis/NotificaitonSystem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddExpense = ({ isOpen, onClose }) => {
  const notify = useNotifier();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const categories = [
    { value: "elektrik", label: "Elektrik" },
    { value: "dogalgaz", label: "Doğalgaz" },
    { value: "kira", label: "Kira" },
    { value: "maas", label: "Maaş" },
    { value: "market", label: "Market" },
    { value: "kasap", label: "Kasap" },
    { value: "toptanci", label: "Toptancı" },
    { value: "digger", label: "Diğer" },
  ];

  const personelList = [
    { value: "john", label: "John Doe" },
    { value: "jane", label: "Jane Smith" },
  ];

  const initialValues = {
    aciklama: "",
    tutar: "",
    kategori: "",
    personel: "",
    tarih: new Date(),
  };

  const validationSchema = Yup.object({
    aciklama: Yup.string().required("Açıklama zorunlu"),
    tutar: Yup.number()
      .positive("Pozitif sayı girin")
      .required("Tutar zorunlu"),
    kategori: Yup.string().required("Kategori seçilmelidir"),
    personel: Yup.string().when("kategori", {
      is: "maas",
      then: (schema) => schema.required("Personel seçimi zorunlu"),
      otherwise: (schema) => schema,
    }),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Gider Eklendi:", values);
    notify("success", "Gider Eklendi", "Gider başarıyla eklendi.");
    resetForm();
    document.body.style.overflow = "auto";
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"aria-hidden="true">
        <DialogPanel className="bg-gray-800 text-gray-100 p-6 rounded-2xl w-full max-w-md shadow-lg space-y-4">
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Yeni Gider Ekle
          </DialogTitle>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form className="space-y-4">
                <InputField
                  name="aciklama"
                  label="Açıklama"
                  placeholder="Domates, Mantar, Makarna..."
                />

                <InputField
                  name="tutar"
                  label="Tutar (₺)"
                  type="number"
                  placeholder="Gider tutarını girin"
                />

                <div className="space-y-1">
                  <select
                    id="kategori"
                    name="kategori"
                    value={values.kategori}
                    onChange={(e) => setFieldValue("kategori", e.target.value)}
                    className="w-full h-9 text-gray-500 bg-gray-900 rounded-2xl px-3 text-sm border-1 border-white/25"
                  >
                    <option value="">Kategori Seçin</option>
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  <ErrorMessage
                    name="kategori"
                    component="div"
                    className="text-red-400 text-xs"
                  />
                </div>

                {values.kategori === "maas" && (
                  <div className="space-y-1">
                    
                    <select
                      id="personel"
                      name="personel"
                      value={values.personel}
                      onChange={(e) => setFieldValue("personel", e.target.value)}
                      className="w-full h-9 bg-gray-900  text-gray-500 rounded-2xl px-3 text-xs border-1 border-white/25"

                    >
                      <option value="">Personel Seçin</option>
                      {personelList.map((p) => (
                        <option key={p.value} value={p.value}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage
                      name="personel"
                      component="div"
                      className="text-red-400 text-xs"
                    />
                  </div>
                )}

                <div className="space-y-1">
                  <DatePicker
                    selected={values.tarih}
                    onChange={(date) => setFieldValue("tarih", date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full h-9 text-gray-500 bg-gray-900 rounded-2xl px-3 text-sm border-1 border-white/25"

                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl bg-gray-500 hover:bg-gray-600 transition text-sm"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 transition text-sm"
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

export default AddExpense;
