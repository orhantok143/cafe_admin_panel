import React, { useEffect } from 'react';
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerFields } from '../../assets/menuItems';
import InputField from '../../utilis/InputField';

const RegisterPage = () => {
  // Dynamically initialize values based on the fields
  const initialValues = registerFields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
    .matches(/^[0-9]+$/, 'Sadece rakam giriniz')
    .min(10, 'Telefon numarası en az 10 karakter olmalı')
    .required('Telefon numarası gerekli'),
  
    password: Yup.string().min(6, 'Min 6 chars').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = (values) => {
    console.log('REGISTER', values);
        toast.error('Register Success');
    
  };
  
    useEffect(() => {
      return () => {
        document.body.style.overflow = "hidden"; // Bileşen unmount olduğunda sıfırla
      };
    }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-200  mb-6">
          Register
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {registerFields.map((field, i) => (
             <InputField 
             key={field.name} 
             name={field.name} 
             type={field.type || 'text'} 
             label={field.label} 
           />
            ))}

            <button
              type="submit"
              className="w-full font-bold py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Register
            </button>

            <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/auth/login" className="text-blue-600 dark:text-blue-400 underline">
                Login
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegisterPage;
