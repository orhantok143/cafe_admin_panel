import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNotifier } from '../../utilis/NotificaitonSystem';
import InputField from '../../utilis/InputField';


const AddCategory = () => {
  const notify = useNotifier();
  const initialValues = {category:""};

  const validationSchema = Yup.object({
    category: Yup.string().required('Category name is required'),
  });

  const handleSubmit = (values, { resetForm }) => {    
    console.log('CATEGORY ADDED:', values);
    notify('success', 'Category Added', `${values.category} Category has been added successfully!`);
    resetForm();
  };



  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="sm:text-md mb-3 text-gray-300 font-semibold text-center">
          Add Category
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
              <InputField
                key='category'
                name='category'
                type='text'
                label='Category Name'
              />
          

            <button
              type="submit"
              className="w-full py-2 mt-4 font-semibold text-sm  hover:bg-green-600 text-white rounded-xl bg-green-700 transition hover:scale-105"
            >
              Add Category
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCategory;
