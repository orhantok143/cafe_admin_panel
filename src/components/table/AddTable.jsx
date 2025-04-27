import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNotifier } from '../../utilis/NotificaitonSystem';
import { productFields, tableField } from '../../assets/menuItems';
import InputField from '../../utilis/InputField';


const AddTable = () => {
  const notify = useNotifier();

  const initialValues = {
    region: '',
    prefix:'',
    quantity:''
   
  };

  const validationSchema = Yup.object({
    region: Yup.string().required('Region name is required'),
    prefix: Yup.string().required('Latter is required'),
    quantity: Yup.number().positive('Must be positive').required('Quantity is required'),
   
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log('Table ADDED:', values);
    notify('success', 'Table Added', 'Table has been added successfully!');
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="sm:text-md text-center text-gray-300 mb-4 font-bold">
          Add Table Group
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {tableField.map((field) => (
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
              Add Tables
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddTable;
