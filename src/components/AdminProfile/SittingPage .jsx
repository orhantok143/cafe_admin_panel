import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "../../utilis/InputField";
import { useNotifier } from "../../utilis/NotificaitonSystem";
import { User, Key, Camera } from "lucide-react";  // lucide-icons kullanarak ikonlar

const AdminProfilePage = () => {
  const notify = useNotifier();
  const [userProfile, setUserProfile] = useState({
    name: "Admin User",
    email: "admin@example.com",
    phone: "+1234567890",
    role: "Admin",
    lastLogin: "2025-04-23 14:35",
    profilePic: "/path/to/profile-pic.jpg",
  });

  const initialValues = {
    name: userProfile.name,
    email: userProfile.email,
    phone: userProfile.phone,
    role: userProfile.role,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const handleSubmit = (values) => {
    setUserProfile({
      ...userProfile,
      name: values.name,
      email: values.email,
      phone: values.phone,
    });

    notify("success", "Profile Updated", "Your profile has been updated successfully!");
  };

  const handlePasswordChange = () => {
    notify("info", "Password Change", "You will be redirected to password change page.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="w-full max-w-lg p-6 rounded-xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Profile</h2>

        {/* Profil Fotoğrafı */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full border-4 border-blue-500">
            <img
              src={userProfile.profilePic}
              alt="Admin"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Profil Bilgileri Formu */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <InputField name="name" label="Full Name" type="text" />
            <InputField name="email" label="Email Address" type="email" />
            <InputField name="phone" label="Phone Number" type="text" />

            <div className="mb-6">
              <label className="text-sm text-gray-400">Role</label>
              <div className="p-2 mt-2 bg-gray-700 rounded-md border-2 border-gray-600">
                <p className="text-white">{userProfile.role}</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-400">Last Login</label>
              <div className="p-2 mt-2 bg-gray-700 rounded-md border-2 border-gray-600">
                <p className="text-white">{userProfile.lastLogin}</p>
              </div>
            </div>

            {/* Şifre Değiştirme */}
            <button
              type="button"
              onClick={handlePasswordChange}
              className="w-full py-2 mt-4 bg-blue-600 text-gray-200 rounded-xl hover:bg-blue-700 transition"
            >
              <Key className="inline-block mr-2" /> Change Password
            </button>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-green-600 text-gray-200 rounded-xl hover:bg-green-700 transition"
            >
              <User className="inline-block mr-2" /> Update Profile
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AdminProfilePage;
