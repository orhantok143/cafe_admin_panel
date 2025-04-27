import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNotifier } from "../../utilis/NotificaitonSystem";
import InputField from "../../utilis/InputField";

const ChangePassword = () => {
  const notify = useNotifier();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string().min(6, "Min 6 chars").required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Change Password", values);
    // Simulate password change process (should be integrated with backend API)
    notify("success", "Password Changed", "Your password has been successfully updated.");
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-xl bg-gray-900 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputField
              name="currentPassword"
              type={isPasswordVisible ? "text" : "password"}
              label="Current Password"
            />

            <InputField
              name="newPassword"
              type={isPasswordVisible ? "text" : "password"}
              label="New Password"
            />

            <InputField
              name="confirmPassword"
              type={isPasswordVisible ? "text" : "password"}
              label="Confirm New Password"
            />

            <div className="flex justify-between items-center mt-4">
                <button
                type="submit"
                className="py-2 px-4 border border-red-600/50 text-gray-200 text-sm font-semibold rounded-xl hover:bg-red-700 transition"
              >
                Cencel
              </button>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-gray-200 text-sm font-semibold rounded-xl hover:bg-blue-700 transition"
              >
                Change Password
              </button>
              
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
