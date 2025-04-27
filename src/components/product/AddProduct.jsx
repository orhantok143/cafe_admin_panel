import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNotifier } from '../../utilis/NotificaitonSystem';
import { productFields } from '../../assets/menuItems';
import InputField from '../../utilis/InputField';


const AddProduct = () => {
  const notify = useNotifier();

  const initialValues = {
    name: '',
    price: '',
    category: '',
    subcategory:'',
    description: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    price: Yup.number().positive('Must be positive').required('Price is required'),
    category: Yup.string().required('Category is required'),
    subcategory: Yup.string().required('Sub Category is required'),
    description: Yup.string().min(10, 'Min 10 characters').required('Description is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('PRODUCT ADDED:', values);
    notify('success', 'Product Added', 'Product has been added successfully!');
    resetForm();
    navigate(`/product/123/upload-image`);
  };
  useEffect(() => {
      document.body.style.overflow = "hidden"; 
  }, []);
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="sm:text-md text-center text-gray-300 mb-4 font-bold">
          Add New Product
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {productFields.map((field) => (
              <InputField
                key={field.name}
                name={field.name}
                type={field.type}
                label={field.label}
              />
            ))}

            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-sm  hover:bg-green-600 text-white rounded-xl bg-green-700 transition hover:scale-105"
            >
              Add Product
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddProduct;
