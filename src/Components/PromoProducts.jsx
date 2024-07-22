import React from "react";
import ProductImg9 from "../assets/product/product-9.jpg";
import ProductImg10 from "../assets/product/Shirt-2.png";
import ProductImg11 from "../assets/product/product-2.jpeg";
import ProductImg12 from "../assets/product/product-3.jpeg";
import ProductImg5 from "../assets/product/product-4.jpg";
import ProductImg6 from "../assets/product/product-5.jpeg";
import ProductImg7 from "../assets/product/product-6.jpeg";
import ProductImg8 from "../assets/product/product-7.jpeg";

const PromoProducts = () => {
  const categories = [
    { title: "T-Shirts", image: ProductImg5 },
    { title: "Long Sleeve T-Shirts", image: ProductImg10 },
    { title: "Activewear", image: ProductImg5 },
    { title: "Hoodies", image: ProductImg10 },
    { title: "Sweaters", image: ProductImg5 },
    { title: "Tank Tops", image: ProductImg10 },
    { title: "Polo Shirts", image: ProductImg5 },
    { title: "Caps", image: ProductImg10 },
  ];

  return (
    <div className="bg-[#F3F4F6] py-8 px-4">
      <div className="max-w-screen-xl  mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          TOP SUPPLY CUSTOMS TEES
        </h2>
        <div className="grid grid-cols-1 hover:shadow sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center  p-[2rem] bg-white shadow-md justify-between"
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
          Shop All Promo Products
        </button>
      </div>
    </div>
  );
};

export default PromoProducts;
