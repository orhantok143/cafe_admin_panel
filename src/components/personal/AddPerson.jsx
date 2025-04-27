import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNotifier } from "../../utilis/NotificaitonSystem";
import InputField from "../../utilis/InputField";
import { addPerson } from "../../assets/menuItems";

const AddPerson = () => {
  const notify = useNotifier();

  const initialValues = {
    name: "",
    salary: "",
    date: "",
    role: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Person name is required"),
    salary: Yup.number()
      .positive("Must be positive")
      .required("Salary is required"),
    date: Yup.date().required("Entry Date is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string().when("role", ([role], schema) => {
      if (["Casher", "Waiter", "Cooker"].includes(role)) {
        return schema
          .required("Password is required")
          .min(6, "Minimum 6 characters");
      }
      return schema.notRequired();
    }),
  });
  useEffect(() => {
      document.body.style.overflow = "hidden"; 
  }, []);
  const handleSubmit = (values, { resetForm }) => {
    console.log("PERSON ADDED:", values);
    notify("success", "Person Added", "Person has been added successfully!");
    resetForm();
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-full max-w-md p-6 rounded-xl">
        <h2 className="text-md text-center text-gray-300 mb-4 font-bold">
          Add Person
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              {/* Normal input alanları InputField ile */}
              {addPerson.map((field) =>
                field.name !== "role" && field.name !== "date" ? (
                  <InputField
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    label={field.label}
                  />
                ) : null
              )}

              <Field
                as="input"
                type="date"
                name="date"
                className="p-2 h-8 w-full border border-gray-600 transition-all text-gray-500 dark:text-gray-400 rounded-2xl bg-white dark:bg-gray-900  text-[10px]
    placeholder-transparent shadow-sm"
              ></Field>
              <ErrorMessage
                name="date"
                component="div"
                className="text-[10px] text-red-500 ml-2"
              />

              {/* Select Role alanı - Manuel */}
              <div className="mb-4 mt-3 ">
                <Field
                  as="select"
                  name="role"
                  className="w-full mt-1 h-9 py-2 rounded-2xl bg-gray-800 text-gray-200 text-[12px] border border-gray-600"
                >
                  <option className="text-gray-500 " value="" disabled>
                    Select Role
                  </option>
                  {addPerson
                    .find((f) => f.name === "role")
                    ?.options.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-[10px] text-red-500 mt-1 ml-2"
                />
              </div>

              {/* Şifre Alanı - sadece bazı roller için */}
              {["Kasiyer", "Garson", "Aşçı"].includes(values.role) && (
                <InputField name="password" type="password" label="Password" />
              )}

              <button
                type="submit"
                className="w-full py-2 mt-4 font-semibold text-sm hover:bg-green-600 text-white rounded-xl bg-green-700 transition hover:scale-105"
              >
                Add Person
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddPerson;
