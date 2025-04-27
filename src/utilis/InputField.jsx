import { useField } from "formik";
import { Eye, EyeClosed, EyeOff } from "lucide-react";
import React, { useState } from "react";

const InputField = ({ label, type, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && !showPassword ? "password" : "text";

  // Burada hata varsa 'border-red-500' ekle, fokus varsa 'focus:ring-blue-600' ekle
  const inputClasses = `peer w-full p-2 border
    ${
      meta.touched && meta.error
        ? "border-red-500"
        : "border-gray-300 dark:border-gray-600"
    } 
    rounded-2xl bg-white dark:bg-gray-900 text-gray-200  text-[12px]
    placeholder-transparent shadow-sm focus:outline-none 
    ${meta.touched && !meta.error ? "focus:ring-blue-600" : ""} 
    ${
      meta.touched && meta.error
        ? ""
        : "focus:ring-blue-600 dark:focus:ring-blue-600"
    } 
    transition duration-300`;

  return (
    <div className="mb-4 relative">
      <input
        {...field}
        {...props}
        id={field.name}
        type={inputType}
        placeholder=" "
        className={inputClasses}
      />
      <label
        htmlFor={field.name}
        className={`absolute left-3 top-3 text-xs transition-all pointer-events-none 
    text-gray-500 dark:text-gray-400
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-[10px]
    peer-focus:-top-0
    peer-focus:text-[10px]
    peer-focus:text-blue-600 dark:peer-focus:text-blue-400
    peer-[&:not(:placeholder-shown)]:top-0.5
    peer-[&:not(:placeholder-shown)]:text-[10px]
    peer-[&:not(:placeholder-shown)]:text-blue-600 dark:peer-[&:not(:placeholder-shown)]:text-blue-400`}
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1.5 text-[10px] text-blue-500 dark:text-blue-500/80"
        >
          {showPassword ? <EyeClosed />: <Eye/>}
        </button>
      )}

      {meta.touched && meta.error && (
        <div className="text-[10px] text-red-500 mt-1 ml-2">{meta.error}</div>
      )}
    </div>
  );
};

export default InputField;
