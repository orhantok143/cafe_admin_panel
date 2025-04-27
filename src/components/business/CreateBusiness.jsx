import { Form, Formik } from "formik";
import { useState } from "react";
import Step1Name from "./Step1Name";
import Step2Contact from "./Step2Contact";
import Step3Address from "./Step3Address";
import Step4Map from "./Step4Map";
import Step5Hours from "./Step5Hours";
import ProductList from "./Step6Menu";

const CreateBusiness = () => {
  const components = [
    Step1Name,
    Step2Contact,
    Step3Address,
    Step4Map,
    Step5Hours,
    ProductList,
  ];
  const steps = [
    "İşletme Adı",
    "İletişim Bilgileri",
    "Adres Bilgileri",
    "Konum Seçimi",
    "Çalışma Saatleri",
    "Menü Seçimi",
  ];
  const [step, setStep] = useState(0);
  const CurrentStep = components[step];
  
  const initialValues = {
    name: "",
    email: "",
    telephone: "",
    city: "",
    district: "",
    address: "",
    location: null, // GeoPoint { lat, lng }
    workingHours: {
      monday: { open: "", close: "" },
      tuesday: { open: "", close: "" },
      wednesday: { open: "", close: "" },
      thursday: { open: "", close: "" },
      friday: { open: "", close: "" },
      saturday: { open: "", close: "" },
      sunday: { open: "", close: "" },
    },
    menu: [],
  };

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = (values) => {
    console.log("Final business data:", values);
    // submit to API here
  };
  
  // Step class based on current step
  const getStepClass = (index) => {
    if (index < step) {
      return "bg-green-600 text-white"; // Completed steps
    }
    if (index === step) {
      return "bg-blue-600 text-white"; // Active step
    }
    return "bg-gray-400 text-gray-700"; // Pending steps
  };

  return (
    <div className="flex justify-center align-middle bg-gray-900 text-gray-300 text-center">
      <div className="max-w-xl  w-full bg-gray-800  py-4 rounded-xl shadow-xl">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {(formik) => (
            <Form>
              {/* Step Timeline */}
              <div className="mb-6 ">
                
                <ul className="sm:w-full flex text-center items-center justify-between">
                  {steps.map((stepTitle, index) => (
                    <li key={index} className="relative flex-1 text-center">
                      <div
                        className={`step-indicator w-5 h-5 rounded-full flex justify-center items-center mx-auto ${
                          getStepClass(index)
                        }`}
                      >
                        {index < step ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-3 w-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : index === step ? (
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        ) : (
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Step Form */}
              <CurrentStep formik={formik} />

              {/* Navigation Buttons */}
              <div className=" flex justify-between mt-6 text-gray-100 px-3">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center font-semibold text-[10px] gap-2 bg-gray-600 px-4 py-2 rounded-full hover:bg-gray-700"
                  >
                    Geri
                  </button>
                )}
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center font-semibold text-[10px] gap-2 bg-green-600 px-4 py-2 rounded-full hover:bg-green-700"
                  >
                    İleri
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={formik.submitForm}
                    className="flex items-center text-[10px] bg-green-600 px-4 py-2 font-semibold rounded-full hover:bg-blue-700"
                  >
                    Bitir ve Kaydet
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateBusiness 