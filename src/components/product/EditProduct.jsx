import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNotifier } from '../../utilis/NotificaitonSystem';
import { productFields } from '../../assets/menuItems';
import { useParams, useNavigate } from 'react-router-dom';
import InputField from '../../utilis/InputField';

// Dummy ürün çekme fonksiyonu
const getProductById = (id) => {
  return {
    id,
    name: 'Sample Product',
    price: 99.99,
    category: 'Electronics',
    subcategory: 'Headphones',
    description: 'This is a sample product for editing.',
    image: 'This is a sample product for editing.',
  };
};

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notify = useNotifier();
  const [initialValues, setInitialValues] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    price: Yup.number().positive('Must be positive').required('Price is required'),
    category: Yup.string().required('Category is required'),
    subcategory: Yup.string().required('Sub Category is required'),
    description: Yup.string().min(10, 'Min 10 characters').required('Description is required'),
    image: Yup.mixed().required('Product image is required').nullable(),
  });

  useEffect(() => {
    const product = getProductById(id);
    if (product) {
      setInitialValues(product);
    }
  }, [id]);

  const handleSubmit = (values) => {
    console.log('UPDATED PRODUCT:', values);
    notify('success', 'Product Updated', 'Product has been updated successfully!');
    navigate('/product/list');
  };
  useEffect(() => {
      document.body.style.overflow = "hidden"; 
  }, []);
  if (!initialValues) return <div className="text-center mt-10 text-gray-700 dark:text-gray-300">Loading product...</div>;

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="sm:text-md mb-3 text-gray-300 text-center font-bold">
          Edit Product
        </h2>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              {productFields.map((field) => (
                <InputField
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  label={field.label}
                />
              ))}

              {/* File Input for Image */}
              <div className="mb-4 relative">
                <Field name="image">
                  {({ field, meta }) => (
                    <>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        placeholder="Product Image"
                        className={`peer w-full px-4 py-3 border ${
                          meta.touched && meta.error
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } rounded-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-transparent shadow-sm focus:outline-none ${
                          meta.touched && !meta.error ? 'focus:ring-blue-600' : ''
                        } transition duration-300`}
                        onChange={(e) => setFieldValue('image', e.currentTarget.files[0])}
                      />
                      <label
                        htmlFor="image"
                        className={`absolute left-4 top-3.5 text-sm transition-all pointer-events-none text-gray-500 dark:text-gray-400
                          peer-placeholder-shown:top-3.5 
                          peer-placeholder-shown:text-sm 
                          peer-focus:top-1 
                          peer-focus:text-xs 
                          peer-focus:text-blue-600 dark:peer-focus:text-blue-400
                          peer-[&:not(:placeholder-shown)]:top-0
                          peer-[&:not(:placeholder-shown)]:text-xs
                          peer-[&:not(:placeholder-shown)]:text-blue-600 dark:peer-[&:not(:placeholder-shown)]:text-blue-400`}
                      >
                        Product Image
                      </label>
                      {meta.touched && meta.error && (
                        <div className="text-sm text-red-500 mt-1">{meta.error}</div>
                      )}
                    </>
                  )}
                </Field>
              </div>

              <button
                type="submit"
                className="w-full py-2 mt-4 bg-yellow-600 text-white rounded-xl hover:bg-yellow-700 transition"
              >
                Update Product
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProduct;
