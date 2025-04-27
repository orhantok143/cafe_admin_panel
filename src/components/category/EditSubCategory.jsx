import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNotifier } from "../../utilis/NotificaitonSystem";
import { useParams, useNavigate } from "react-router-dom";
import InputField from "../../utilis/InputField";

// Dummy ürün çekme fonksiyonu
const getSubCategoryById = (id) => {
  return {
    subcategory: "Laptop",
  };
};

const EditSubCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notify = useNotifier();
  const [initialValues, setInitialValues] = useState(null);

  const validationSchema = Yup.object({
    subcategory: Yup.string().required("Category is required"),
  });

  useEffect(() => {
    const subcategory = getSubCategoryById(id);
    if (subcategory) {
      setInitialValues(subcategory);
    }
  }, [id]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const handleSubmit = (values) => {
    console.log("UPDATED PRODUCT:", values);
    notify(
      "success",
      "Product Updated",
      "Product has been updated successfully!"
    );
    navigate("/product/list");
  };

  if (!initialValues)
    return (
      <div className="text-center mt-10 text-gray-700 dark:text-gray-300">
        Loading product...
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="sm:text-md mb-3 text-gray-300 text-center">
          Edit SubCategory
        </h2>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form>
              <InputField
                key="subcategory"
                name="subcategory"
                type="text"
                label="SubCategory Name"
              />

              <button
                type="submit"
                disabled={!isValid}
                className="w-full py-2 mt-4 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition"
              >
                Update SubCategory
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditSubCategory;
