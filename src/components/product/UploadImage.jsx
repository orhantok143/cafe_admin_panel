import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useNotifier } from "../../utilis/NotificaitonSystem";

const UploadImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notify = useNotifier();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // 👈 Önizleme için state
  useEffect(() => {
      document.body.style.overflow = "hidden"; 
  }, []);
  const formik = useFormik({
    initialValues: {
      image: "",
    },
    validationSchema: Yup.object().shape({
      image: Yup.mixed().required("Image is required"),
    }),

    onSubmit: (values) => {
      //   if (!file) {
      //     notify('error', 'No File Selected', 'Please select an image to upload');
      //     return;
      //   }

      // Burada dosya sunucuya gönderilebilir
      console.log("Uploading image for product ID:");
      console.log("Form Values:", values);
      console.log("Selected File:", file);

      notify(
        "success",
        "Upload Successful",
        `Image uploaded for product ID: 1234`
      );
      navigate("/product/add");
    },
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);

      // Formik'e de dosyayı geçir
      formik.setFieldValue("image", selectedFile);
    } else {
      setPreviewUrl(null);
      formik.setFieldValue("image", null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 rounded-xl border dark:border-gray-700">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Upload Product Image
        </h2>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Select Image
            </label>
            <input
              id="file"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-xl dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
          </div>
          {formik.errors.image && formik.touched.image && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.image}
            </div>
          )}

          {previewUrl && (
            <div className="mb-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Preview:
              </p>
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full rounded-lg border dark:border-gray-600"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadImage;
