import React from "react";
import ProductImg1 from "../assets/product/product-1.jpg";
import ProductImg2 from "../assets/product/product-2.webp";
import ProductImg3 from "../assets/product/product-3.jpg";
import ProductImg4 from "../assets/product/product-4.jpg";
import ProductImg5 from "../assets/product/product-5.jpg";
import ProductImg6 from "../assets/product/product-6.jpg";
import ProductImg7 from "../assets/product/product-7.jpg";
import ProductImg8 from "../assets/product/product-8.jpg";

const ProductCategories = () => {
  const categories = [
    { title: "T-Shirts", image: ProductImg1 },
    { title: "Long Sleeve T-Shirts", image: ProductImg2 },
    { title: "Activewear", image: ProductImg3 },
    { title: "Hoodies", image: ProductImg4 },
    { title: "Sweaters", image: ProductImg5 },
    { title: "Tank Tops", image: ProductImg6 },
    { title: "Polo Shirts", image: ProductImg7 },
    { title: "Caps", image: ProductImg8 },
  ];

  return (
    <div className="bg-[#F3F4F6] py-8 px-4">
      <div className="max-w-screen-xl  mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Shop Our Top Categories
        </h2>
        <div className="grid grid-cols-1 hover:shadow sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center  p-4 bg-white shadow-md"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-100 object-cover mb-3"
              />
              <a href="" className="text-lg font-semibold">
                {category.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="shop-btn my-5 flex align-middle justify-center">
        <button className="bg-blue-500 h-[50px] hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          SHOP All PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default ProductCategories;
