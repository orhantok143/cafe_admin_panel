import { useEffect, useState } from "react";

const Step5Hours = ({ setCurrentStep, setFormData, formik }) => {
  const [selectAll, setSelectAll] = useState(false);
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const day = name.split("-")[0];
    const type = name.split("-")[1];
    console.log(name ,value);
    if (name === "open-time") {
      Object.keys(formik.values.workingHours).forEach((day) => {
        formik.setFieldValue(`workingHours.${day}.open`, value);
      });
     
    } else if (name === "close-time") {
      Object.keys(formik.values.workingHours).forEach((day) => {
        formik.setFieldValue(`workingHours.${day}.close`, value);
      });
    }

    // Update Formik field value
    // formik.setFieldValue(`workingHours.${day}.${type}`, value);
    console.log(formik.values.workingHours); // Log Formik values after input change
  };

  const handleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    
    // When selectAll is checked, set all days with open and close times
    if (!selectAll) {
      Object.keys(formik.values.workingHours).forEach((day) => {
        formik.setFieldValue(`workingHours.${day}.open`, openTime);
        formik.setFieldValue(`workingHours.${day}.close`, closeTime);
      });
    } else {
      // When selectAll is unchecked, reset all times to empty
      Object.keys(formik.values.workingHours).forEach((day) => {
        formik.setFieldValue(`workingHours.${day}.open`, "");
        formik.setFieldValue(`workingHours.${day}.close`, "");
      });
    }
  };

  const handleOpenCloseChange = (e) => {
    handleInputChange(e)
    const { name, value } = e.target;
     
    if (name === "open-time") {
      setOpenTime(value)
     
    } else if (name === "close-time") {
      setCloseTime(value);
    }
    handleInputChange(e)
  };

    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // veya "auto"
      });
    }, []);
    

  return (
    <div className="px-4">
      <h3 className="sm:text-xl font-semibold mb-3 text-gray-300">Çalışma Saatleri</h3>

      {/* Tüm günleri seçme Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAll}
          className="mr-2"
        />
        <span className="text-sm text-gray-300">Tüm günleri seç</span>
      </div>

      {/* Tüm günler için açılış ve kapanış saatlerini ayarlama inputları */}
      {selectAll && (
        <div className="flex mb-6 gap-4 items-center">
          <div className="flex gap-2 items-center">
            <label className="text-xs text-gray-400">Açılış Saati</label>
            <input
              type="time"
              name="open-time"
              value={openTime}
              onChange={handleOpenCloseChange}
              className="p-2 border border-gray-400 rounded-lg w-30"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label className="text-xs text-gray-400">Kapanış Saati</label>
            <input
              type="time"
              name="close-time"
              value={closeTime}
              onChange={handleOpenCloseChange}
              className="p-2 border border-gray-400 rounded-lg w-30"
            />
          </div>
        </div>
      )}

      <div className="space-y-3">
        {Object.keys(formik.values.workingHours).map((day) => (
          <div key={day} className="flex items-center justify-between">
            <div className="flex text-start items-center gap-2">
              <label className="w-20 text-sm font-medium text-gray-400 ">
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
              {!selectAll ? (
                <div className="flex gap-3">
                  <input
                    type="time"
                    name={`${day}-open`}
                  
                    onChange={handleInputChange}
                    className="p-2 border border-gray-400 rounded-lg  w-30"
                  />
                  <input
                    type="time"
                    name={`${day}-close`}
                   
                    onChange={handleInputChange}
                    className="p-2 border border-gray-400 rounded-lg  w-30"
                  />
                </div>
              ) : (
                <div className="flex gap-3">
                  <input
                    type="time"
                    name={`${day}-open`}
                    value={formik.values.workingHours[day].open}
                    className="p-2 border border-gray-400 rounded-lg w-30"
                    disabled
                  />
                  <input
                    type="time"
                    name={`${day}-close`}
                    value={formik.values.workingHours[day].close}
                    className="p-2 border border-gray-400 rounded-lg w-30 "
                    disabled
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step5Hours;
