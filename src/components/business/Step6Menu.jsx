import React, { useState, useEffect } from "react";

const Step6Menu = ({ formik }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [openAccordionIndex, setOpenAccordionIndex] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const categories = [
    {
      name: "Elektronik",
      subCategories: [
        {
          name: "Telefonlar",
          products: [
            { name: "iPhone 13", price: "15,000 TL" },
            { name: "Samsung Galaxy S21", price: "13,000 TL" },
          ],
        },
        {
          name: "Laptoplar",
          products: [
            { name: "MacBook Pro", price: "25,000 TL" },
            { name: "Dell XPS 13", price: "18,000 TL" },
          ],
        },
      ],
    },
    {
      name: "Ev & Yaşam",
      subCategories: [
        {
          name: "Mobilya",
          products: [
            { name: "Sofa", price: "5,000 TL" },
            { name: "Dining Table", price: "3,000 TL" },
          ],
        },
        {
          name: "Dekorasyon",
          products: [
            { name: "Wall Art", price: "500 TL" },
            { name: "Rug", price: "750 TL" },
          ],
        },
      ],
    },
    {
      name: "Kişisel Bakım",
      subCategories: [
        {
          name: "Cilt Bakım",
          products: [
            { name: "Moisturizer", price: "150 TL" },
            { name: "Face Mask", price: "120 TL" },
          ],
        },
      ],
    },
  ];

  // Load selectedProducts from localStorage on mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("selectedProducts"));
    if (savedProducts) {
      setSelectedProducts(savedProducts);
    }
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setOpenAccordionIndex(null);
    setSelectedProducts([]);
  };

  const toggleAccordion = (index) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const isProductSelected = (product) => {
    return selectedProducts.some(
      (p) => p.name === product.name && p.price === product.price
    );
  };

  const handleProductToggle = (product) => {
    const exists = isProductSelected(product);
    let updatedSelectedProducts;

    if (exists) {
      updatedSelectedProducts = selectedProducts.filter(
        (p) => !(p.name === product.name && p.price === product.price)
      );
    } else {
      updatedSelectedProducts = [...selectedProducts, product];
    }

    setSelectedProducts(updatedSelectedProducts);
  };

  const isAllSubCategorySelected = (products) =>
    products.every((product) => isProductSelected(product));

  const handleSubCategoryToggle = (products) => {
    let updatedSelectedProducts;
    if (isAllSubCategorySelected(products)) {
      updatedSelectedProducts = selectedProducts.filter(
        (p) =>
          !products.some((sp) => sp.name === p.name && sp.price === p.price)
      );
    } else {
      const newSelections = products.filter(
        (product) => !isProductSelected(product)
      );
      updatedSelectedProducts = [...selectedProducts, ...newSelections];
    }

    setSelectedProducts(updatedSelectedProducts);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // veya "auto"
    });
  }, []);

  useEffect(() => {
    formik.setFieldValue("menu", selectedProducts);
    localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  return (
    <div className="sm:w-full mx-auto p-4">
      {/* Kategori Seçimi */}
      <div className="mb-4">
        <label
          htmlFor="category"
          className="sm:text-xl font-semibold mb-3 text-gray-300"
        >
          Menu Oluşturun
        </label>
        <select
          id="category"
          className=" mt-2 p-2 h-10 focus:outline-1 focus:border-0 focus:outline-blue-400 border-gray-400 rounded-xl w-full border bg-gray-800 text-sm transition-all
    text-gray-500 dark:text-gray-400
    peer-placeholder-shown:top-3.5 
    peer-placeholder-shown:text-sm 
    peer-focus:top-1 
    peer-focus:text-xs "
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Kategori Seçin</option>
          {categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <hr className="mb-4 text-gray-700" />
      {/* Alt Kategoriler ve Ürünler */}
      {selectedCategory &&
        categories
          .find((category) => category.name === selectedCategory)
          ?.subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="mb-4 border items-center border-gray-500 rounded-xl overflow-hidden "
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="flex justify-between  items-center p-2 w-full font-semibold focus:outline-none text-gray-300"
              >
                <div className="flex items-center text-sm  font-semibold">
                  <input
                    type="checkbox"
                    className="mr-2 text-sm  transition-all text-gray-100 bg-blue-600"
                    checked={isAllSubCategorySelected(subCategory.products)}
                    onChange={() =>
                      handleSubCategoryToggle(subCategory.products)
                    }
                    onClick={(e) => e.stopPropagation()} // Akordeon açılmasını engelle
                  />
                  {subCategory.name}
                </div>
                <span className="text-[10px] text-gray-200">{openAccordionIndex === index ? "▲" : "▼"}</span>
              </button>

              {openAccordionIndex === index && (
                <div className=" dark:bg-gray-900 p-4 text-gray-300">
                  {subCategory.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex items-center py-2 text-[10px] font-semibold"
                    >
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={isProductSelected(product)}
                        onChange={() => handleProductToggle(product)}
                      />
                      <span>
                        {product.name} - {product.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default Step6Menu;
