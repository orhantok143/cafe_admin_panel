import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNotifier } from '../../utilis/NotificaitonSystem';
import InputField from '../../utilis/InputField';

const AddSubCategory = () => {
  const notify = useNotifier();
  const [isSubCategoryVisible, setIsSubCategoryVisible] = useState(false);

  const initialValues = {
    category: '',
    subCategory: '',
  };

  const validationSchema = Yup.object({
    category: Yup.string().required('Category name is required'),
    subCategory: Yup.string().required('Subcategory name is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('CATEGORY ADDED:', values);
    notify('success', 'Category Added', 'Category has been added successfully!');
    resetForm();
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      setIsSubCategoryVisible(true);
    } else {
      setIsSubCategoryVisible(false);
    }
  };
  useEffect(() => {
      document.body.style.overflow = "hidden"; 
  }, []);
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="sm:text-md mb-3 text-gray-300 text-center">
          Add SubCategory
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <Form>
              <div className="mb-4">
            
                <select
                  id="category"
                  name="category"
                  value={values.category}
                  onChange={(e) => {
                    handleChange(e); // This updates Formik's value
                    handleCategoryChange(e); // This triggers visibility change
                  }}
                  // onBlur={handleBlur}
                  className="w-full h-9 p-2 border text-[10px] border-gray-600 rounded-2xl bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="home">Home</option>
                  {/* Add other categories here */}
                </select>
                {errors.category && touched.category && (
                  <div className="text-red-500 text-[10px] mt-1">{errors.category}</div>
                )}
              </div>

              {isSubCategoryVisible && (
                <div className="mb-4">
                 
                  <InputField
                    key="subCategory"
                    name="subCategory"
                    type="text"
                    label="Subcategory Name"
                  />
                 
                </div>
              )}

<button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-sm  hover:bg-green-600 text-white rounded-xl bg-green-700 transition hover:scale-105"
            >
              Add SubCategory
            </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddSubCategory;
