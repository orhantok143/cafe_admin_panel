import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { loginFields } from "../../assets/menuItems";
import InputField from "../../utilis/InputField";
import { useNotifier } from "../../utilis/NotificaitonSystem";

const LoginPage = () => {
  const notify = useNotifier();
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("LOGIN", values);
    if (values.email === "admin@test.com" && values.password === "123456") {
      notify("success", "Login Success", "Welcome back!");
    } else {
      notify("error", "Login Failed", "Invalid credentials");
    }
    resetForm();
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "hidden"; // Bileşen unmount olduğunda sıfırla
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {loginFields.map((field) => (
              <InputField
                key={field.name}
                name={field.name}
                type={field.type || "text"}
                label={field.label}
              />
            ))}

            <button
              type="submit"
              className="w-full py-2 font-bold mt-4 bg-blue-600 text-gray-200 rounded-xl hover:bg-blue-700 transition"
            >
              Login
            </button>

            <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Register
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
